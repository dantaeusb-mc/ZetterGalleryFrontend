import { GetServerSidePropsResult, NextPageContext } from 'next';
import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import { FormattedMessage, useIntl } from 'react-intl';
import { injectClassNames } from '@/utils/css';
import { apiGet, apiPost } from '@/utils/request';
import { PlayerPreferencesResponseDto } from '@/dto/response/player/preferences.dto';
import { HttpCodeError } from '@/utils/request/api-get';
import { Toggle } from '@components/widgets/toggle';
import { PaintingRatingResponseDto } from '@/dto/response/paintings/ratings.dto';
import styles from './preferences.module.scss';
import { Button, ButtonStyle } from '@components/button';
import React, { FormEvent, useEffect, useState } from 'react';
import { Callout, CalloutSeverity } from '@components/widgets/callout';
import lodash from 'lodash';
import { PlayerPreferencesBodyDto } from '@/dto/request/player/preferences.body.dto';
import { NextActionProps, parseNextAction } from '@/const/next-action.type';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from "@pages/_app";

export interface PreferencesProps {
  playerUuid: string;
  isProfilePublic: boolean;
  playerRatings: string[];
  allRatings: PaintingRatingResponseDto[];
  nextAction?: NextActionProps;
}

interface PreferencesState {
  isProfilePublic: boolean;
  playerRatings: string[];
}

const PreferencesPage: NextPageWithLayout<PreferencesProps> = (props: PreferencesProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { playerUuid, allRatings, ...defaultState } = props;

  const [savedPreferences, setSavedPreferences] = useState<PreferencesState>(
    lodash.cloneDeep(defaultState),
  );

  const [preferences, setPreferences] = useState<PreferencesState>(
    lodash.cloneDeep(defaultState),
  );

  const intl = useIntl();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body: PlayerPreferencesBodyDto = {
      isProfilePublic: preferences.isProfilePublic,
      ratings: preferences.playerRatings,
    };

    apiPost(`/players/${playerUuid}/preferences`, body)
      .then(() => {
        setSavedPreferences(preferences);

        if (props.nextAction) {
          router.push(props.nextAction.path);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    console.log(savedPreferences, preferences);
  }, [preferences]);

  return (
    <>
      <Head>
        <title>Player's Preferences | Zetter Gallery</title>
        <meta name="description" content="Your preferences on Zetter Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Callout severity={CalloutSeverity.Warning}>
        <FormattedMessage
          id="player.preferences.callout.alpha-warning"
          defaultMessage="This does not affect your feed in alpha version (but will at some point in future)! Art moderation is difficult, so be warned that you may see different things!"
        />
      </Callout>
      <section className={injectClassNames('block', styles['preferences'])}>
        <form
          action={`${process.env.NEXT_PUBLIC_API_URI}/players/me/preferences`}
          onSubmit={handleSubmit}
        >
          <h1>
            <FormattedMessage
              id="player.preferences.title"
              defaultMessage="Preferences"
            />
          </h1>
          <h2>
            <FormattedMessage
              id="player.preferences.public.profile"
              defaultMessage="Profile"
            />
          </h2>
          <Toggle
            id="isProfilePublic"
            name="isProfilePublic"
            enabled={preferences.isProfilePublic}
            unsaved={
              savedPreferences.isProfilePublic != preferences.isProfilePublic
            }
            title={
              <FormattedMessage
                id="player.preferences.public.toggle.title"
                defaultMessage="Make your profile visible to other players"
              />
            }
            description={
              <FormattedMessage
                id="player.preferences.public.toggle.description"
                defaultMessage={
                  "Is you disable this, your nickname and avatar still will be visible, but players won't be able to view paintings and badges in your profile"
                }
              />
            }
            onChange={(e) => {
              setPreferences({
                ...preferences,
                ...{ isProfilePublic: e.currentTarget.checked },
              });
            }}
          />
          <h2>
            <FormattedMessage
              id="player.preferences.ratings.title"
              defaultMessage="Ratings"
            />
          </h2>
          <p className={styles['description']}>
            <FormattedMessage
              id="player.preferences.ratings.description"
              defaultMessage="This section allows you to control what kind of paintings you may see in your feed"
            />
          </p>
          {props.allRatings.map((rating) => {
            return (
              <Toggle
                id={`rating${rating.code}`}
                key={`rating${rating.code}`}
                name={`rating[${rating.code}]`}
                enabled={preferences.playerRatings.includes(rating.code)}
                unsaved={
                  savedPreferences.playerRatings.includes(rating.code) !==
                  preferences.playerRatings.includes(rating.code)
                }
                title={rating.title}
                description={rating.description}
                onChange={(e) => {
                  let newPlayerRatings = preferences.playerRatings;

                  if (e.currentTarget.checked) {
                    newPlayerRatings.push(rating.code);
                  } else {
                    newPlayerRatings = newPlayerRatings.filter(
                      (ratingCode) => ratingCode !== rating.code,
                    );
                  }

                  setPreferences({
                    ...preferences,
                    ...{ playerRatings: newPlayerRatings },
                  });
                }}
              />
            );
          })}
          <div className={styles['preferences-footer']}>
            <div className={styles['left']}>
              <Button
                title={intl.formatMessage({
                  id: 'player.preferences.button.reset',
                  defaultMessage: 'Reset',
                })}
                className={styles['reset-button']}
                style={ButtonStyle.SECONDARY}
                type="reset"
                action={(e) => {
                  e.preventDefault();
                  setPreferences(lodash.cloneDeep(savedPreferences));
                }}
              >
                <FormattedMessage
                  id="player.preferences.button.reset"
                  defaultMessage="Reset"
                />
              </Button>
            </div>
            <div className={styles['right']}>
              {props.nextAction ? (
                <Button
                  title={intl.formatMessage({
                    id: 'player.preferences.button.save',
                    defaultMessage: 'Save',
                  })}
                  className={styles['save-button']}
                  style={ButtonStyle.SUCCESS}
                  type="submit"
                >
                  <FormattedMessage
                    id="player.preferences.button.save-and-continue"
                    defaultMessage="Save and continue"
                  />
                </Button>
              ) : (
                <Button
                  title={intl.formatMessage({
                    id: 'player.preferences.button.save',
                    defaultMessage: 'Save',
                  })}
                  className={styles['save-button']}
                  style={ButtonStyle.SUCCESS}
                  type="submit"
                >
                  <FormattedMessage
                    id="player.preferences.button.save"
                    defaultMessage="Save"
                  />
                </Button>
              )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

PreferencesPage.getLayout = (page) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default PreferencesPage;

export async function getServerSideProps(
  context: NextPageContext,
): Promise<
  GetServerSidePropsResult<PreferencesProps & Partial<NextActionProps>>
> {
  const nextAction = parseNextAction(context);

  let preferences: PlayerPreferencesResponseDto;
  let ratings: PaintingRatingResponseDto[];

  try {
    [preferences, ratings] = await Promise.all([
      apiGet<PlayerPreferencesResponseDto>(
        '/players/me/preferences',
        {},
        context,
      ),
      apiGet<PaintingRatingResponseDto[]>('/paintings/ratings', {}, context),
    ]);
  } catch (e) {
    if (e instanceof HttpCodeError && e.response.status === 401) {
      return {
        redirect: {
          permanent: false,
          destination: '/auth/start',
        },
      };
    }

    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
    };
  }

  return {
    props: {
      playerUuid: preferences.playerUuid,
      isProfilePublic: preferences.isProfilePublic,
      playerRatings: preferences.paintingRatings,
      allRatings: ratings,
      ...(nextAction ? { nextAction: nextAction } : {}),
    },
  };
}
