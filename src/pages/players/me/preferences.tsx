import { NextPageContext } from 'next';
import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import { FormattedMessage, useIntl } from 'react-intl';
import { injectClassNames } from '@/utils/css';
import { apiGet } from '@/utils/request';
import { PlayerPreferencesResponseDto } from '@/dto/response/player/preferences.dto';
import { HttpCodeError } from '@/utils/request/apiGet';
import { Toggle } from '@components/widgets/toggle';
import { PaintingRatingResponseDto } from '@/dto/response/paintings/ratings.dto';
import styles from './preferences.module.scss';
import { Button } from '@components/button';
import React from 'react';
import { Callout, CalloutSeverity } from '@components/widgets/callout';

export interface PreferencesProps {
  playerUuid: string;
  isProfilePublic: string;
  playerRatings: string[];
  allRatings: PaintingRatingResponseDto[];
}

export default function Preferences(props: PreferencesProps): JSX.Element {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>Player's Preferences | Zetter Gallery</title>
        <meta name="description" content="Your preferences on Zetter Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Callout severity={CalloutSeverity.Warning}>
          <FormattedMessage
            id="player.preferences.callout.alpha-warning"
            defaultMessage="This does not affect your feed in alpha version (but will at some point in future)! Art moderation is difficult, so be warned that you may see different things!"
          />
        </Callout>
        <section className={injectClassNames('block', styles['preferences'])}>
          <form>
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
              enabled={false}
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
                  name={`rating[${rating.code}]`}
                  enabled={props.playerRatings.includes(rating.code)}
                  title={rating.title}
                  description={rating.description}
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
                  type="reset"
                  action={() => {
                    return void 0;
                  }}
                >
                  <FormattedMessage
                    id="player.preferences.button.reset"
                    defaultMessage="Reset"
                  />
                </Button>
              </div>
              <div className={styles['right']}>
                <Button
                  title={intl.formatMessage({
                    id: 'player.preferences.button.save',
                    defaultMessage: 'Save',
                  })}
                  className={styles['save-button']}
                  type="submit"
                  action={() => {
                    return void 0;
                  }}
                >
                  <FormattedMessage
                    id="player.preferences.button.save"
                    defaultMessage="Save"
                  />
                </Button>
              </div>
            </div>
          </form>
        </section>
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
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
        props: {},
      };
    }

    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
      props: {},
    };
  }

  return {
    props: {
      ...{
        playerUuid: preferences.playerUuid,
        isProfilePublic: preferences.isProfilePublic,
        playerRatings: preferences.paintingRatings,
      },
      ...{
        allRatings: ratings,
      },
    },
  };
}
