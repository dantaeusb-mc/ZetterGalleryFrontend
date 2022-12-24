import React, { PropsWithChildren } from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import { NextPage } from 'next';
import getTitle from '@/utils/page/get-title';

type CreditsGroups = 'general' | 'translators' | 'thanks'; // | 'bugSmashers'

type CreditsProps = Record<
  CreditsGroups,
  {
    title: string;
    people: Record<
      string,
      {
        name: string;
        description: string;
      }
    >;
  }
>;

const CreditsPage: NextPage<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'contributors.page.title',
      defaultMessage: 'Contributors',
      description: 'Contributors page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'contributors.page.description',
    defaultMessage: 'Zetter Gallery credits',
    description: 'Credits page description',
  });

  const nicePeople: CreditsProps = {
    general: {
      title: 'Contributors',
      people: {
        dantaeusb: {
          name: '@dantaeusb (Dmitry Burlakov)',
          description:
            'Programmer, author of Zetter mod, Zetter Gallery mod, API and front-end',
        },
        ppblitto: {
          name: '@ppblitto (StuarteLitro)',
          description: 'Artist, Zetter mod assets',
        },
        pxlsamosa: {
          name: '@pxlsamosa (Pxlsamosa)',
          description: 'Artist, Zetter mod & website assets',
        },
        eliathx: {
          name: '@eliathx (Eliathx)',
          description: 'Artist, website assets',
        },
        grimmnail: {
          name: '@GrimmNail (GrimmNail)',
          description: 'Artist, website assets',
        },
      },
    },
    translators: {
      title: 'Translators',
      people: {
        vakarian89: {
          name: 'Vakarian89',
          description: 'Polish translation for the mod and website',
        },
        itamarDenkberg: {
          name: 'ItamarDenkberg',
          description: 'Hebrew translation for the mod',
        },
        isrninja: {
          name: 'iSrNinja',
          description: 'Spanish translation for the mod',
        },
        drhesperus: {
          name: 'DrHesperus',
          description: 'Russian translation for the mod & community highlight',
        },
        cream280: {
          name: 'cream280',
          description: 'Chinese translation for the mod & community highlight',
        },
        ottovonbismarckdererste: {
          name: 'OttovonBismarckderErste',
          description: 'German translation for the mod & community highlight',
        },
      },
    },
    thanks: {
      title: 'Special thanks',
      people: {
        diesieben07: {
          name: '@diesieben07 (diesieben07#0714)',
          description:
            'Forge Discord, absolutely insane amount of help with mod development',
        },
        xfacthd: {
          name: '@XFactHD (XFactHD#5288)',
          description: 'Forge Discord, helped to get through a very rough path of Minecraft modding',
        },
        gigaherz: {
          name: '@gigaherz (gigaherz#9173)',
          description: 'Forge Discord, consultations about Forge and GUI',
        },
        cyborgmas: {
          name: 'Cyborgmas#0379',
          description: 'Forge Discord help',
        },
        amethyst: {
          name: 'Amethyst#6998',
          description: 'Forge Discord help',
        },
        kovak: {
          name: 'Kovak#5505',
          description: 'Forge Discord help',
        },
        woodlandCreature: {
          name: 'Woodland Creature#3144',
          description: 'Forge Discord help',
        },
        championAsh: {
          name: 'ChampionAsh5357#5519',
          description: 'Forge Discord help',
        },
        lemongradle: {
          name: 'Lemongradle (sciwhiz12#1286)',
          description: 'Forge Discord help',
        },
        greyminecraftcoder: {
          name: 'greyminecraftcoder',
          description: 'MinecraftByExample Modding tutorials',
        },
        mcjty: {
          name: 'McJty',
          description: 'Minecraft Forge Modding tutorials',
        },
        vazkiiQuark: {
          name: 'Vazkii and Quark team',
          description:
            'For opening their source code as I often used it as a reference',
        },
      },
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <h1>
          <FormattedMessage
            id="contributors.title"
            defaultMessage="Credits"
            description="Title for Zetter Gallery Credits Page"
          />
        </h1>
        {Object.keys(nicePeople).map((groupCode) => {
          const group = nicePeople[groupCode as CreditsGroups];
          return (
            <>
              <h2>{group.title}</h2>
              <dl>
                {Object.keys(group.people).map((personCode) => {
                  const person = group.people[personCode];
                  return (
                    <>
                      <dt>{person.name}</dt>
                      <dd>{person.description}</dd>
                    </>
                  );
                })}
              </dl>
            </>
          );
        })}
      </DefaultLayout>
    </>
  );
};

export default CreditsPage;
