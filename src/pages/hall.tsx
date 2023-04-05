import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import ConstructionPlaceholder from '@components/construction-placeholder';
import { NextPageWithLayout } from '@pages/_app';
import Contest from '@components/contest';
import {
  CommunityBadge, CommunityBadges,
  EventBadge,
  EventBadges,
  StyleBadge,
  StyleBadges
} from "@/const/badges";
import Quest from "@components/contest/quest/quest.component";
import Post from "@components/post";

const SearchPage: NextPageWithLayout<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  return (
    <>
      <Head>
        <title>Search | Zetter Gallery</title>
        <meta name="description" content="Zetter Gallery About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Zetter Gallery</p>
      <h1>Hall of Fame</h1>
      <p>Contests and winners</p>
      <Contest
        title="The Censorship"
        type="Gallery Contest"
        badge={StyleBadges[StyleBadge.LANDSCAPE]}
        //badge={EventBadges[EventBadge.THE_CENSORSHIP]}
      />
      <Quest badge={CommunityBadges[CommunityBadge.HONORED_V]}
             title="Epic"
             description="Badge for all qualified participants">
        <p style={{margin: 0}}>Submit a painting of requested size to qualify</p>
      </Quest>
      <Post author={{ uuid: '2a9d4868-9b4c-43c3-8ca4-482cda39f3e6', nickname: 'dantaeusb' }}>
        <p>
          The next feature set I would like to implement in the mod is the option for server administrators to
          moderate the content that the players make on the servers. But I don’t want to leave empty frames when some
          painting is banned from the server. Instead, the fallback paintings will be used, which are picked from the
          paintings that are submitted to the service.
        </p>
        <h4>Payout</h4>
        <p>
          We will be able to do a payout to PayPal accounts. Alternatively, if you do not have access to PayPal, we can transfer your prize in USDT (crypto), TRY (FAST transfer) and RUB (SBP).
        </p>
        <h4>Terms</h4>
        <h5>Only in-game paintings</h5>
        <p>
          To participate, you have to have an official Minecraft account, and download Zetter and Zetter Gallery mods. Only paintings that are submitted through in-game Painting Merchants will participate in the contest. By submitting a painting, you confirm that you are the author of the painting and that it is an original creation. Plagiarism or copyright infringement will result in disqualification.
        </p>
        <h5>No questionable content</h5>
        <p>
          These paintings will be used as a fallback painting for banned ones. That means that the submitted painting should not have any references to delicate topics, such as:
        </p>
        <ul>
          <li>Political or religious topics;</li>
          <li>Sexual or violent content, nudity;</li>
          <li>References to drugs;</li>
          <li>Frightening images;</li>
          <li>Discrimination, hate speech and bad language in any forms;</li>
        </ul>
        <h5>Confirmed intention</h5>
        <p>
          For us to use your painting in the contest, you should let us know about the paintings you would like to be considered in my Discord.
        </p>
        <h5>Rights for distribution without retention</h5>
        <p>
          When you confirm with the moderators that you would like to participate in the contest with some painting, you agree that this painting might later be used in Zetter and Zetter Gallery mods. These paintings will be distributed with Zetter mod and available in Zetter Gallery, and you agree to allow us to distribute it, but not exclusively. Unlike other paintings in the Gallery, these cannot be removed from the mods and the service.
        </p>
        <h5>Timeframe</h5>
        <p>
          For each painting size, two weeks will start counting, since the first painting will be submitted to Zetter Gallery and confirmed by a moderator. If there are no other paintings, consider this auto-win. It does not necessarily mean that your painting will be used as a fallback.
        </p>
      </Post>
      <Contest
        title="Still Life Artist"
        type="Highlight category"
        badge={StyleBadges[StyleBadge.STILL_LIFE]}
      />
      <Quest badge={CommunityBadges[CommunityBadge.POP_STAR]}
             title="$300"
             description="Prize pool with up to $30 for every winning painting">
        <p style={{margin: 0}}>The best painting in every size category will be awarded with $15-30 prize depending on the size</p>
      </Quest>
    </>
  );
};

SearchPage.getLayout = (page: ReactElement): ReactNode => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default SearchPage;
