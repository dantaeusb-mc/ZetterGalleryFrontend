import React, { PropsWithChildren } from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import { NextPage } from 'next';
import getTitle from '@/utils/page/get-title';
import Callout, {
  CalloutSeverity,
} from '../components/widgets/callout/callout.component';

const TermsPage: NextPage<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'terms.page.title',
      defaultMessage: 'Terms of Service',
      description: 'ToS page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'terms.page.description',
    defaultMessage: 'Zetter Gallery terms of service',
    description: 'ToS page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Callout severity={CalloutSeverity.Warning}>
          <FormattedMessage
            id="human-terms.title.callout.check-english"
            defaultMessage="These statements are not legally binding. This page provides short explanation of the terms of use and some details about intended usage of this service."
          />
        </Callout>
        <h1>
          <FormattedMessage
            id="human-terms.title"
            defaultMessage="Greetings,"
          />
        </h1>
        <h2>
          <FormattedMessage
            id="human-terms.introduction.title"
            defaultMessage="Let me explain some details about Zetter Gallery"
          />
        </h2>
        <p>
          <FormattedMessage
            id="human-terms.introduction.paragraph.1"
            defaultMessage="First of all, Zetter Gallery is not some kind of legal entity, and created & provided solely by a single person so far. This adds some complications, but we'll talk about that later."
          />
        </p>
        <p>
          <FormattedMessage
            id="human-terms.introduction.paragraph.2"
            defaultMessage="Zetter Gallery is created with single purpose — let people to create and share their artworks in a wonderful game called Minecraft. Advertising or selling things is not a purpose of this service."
          />
        </p>
        <h2>
          <FormattedMessage
            id="human-terms.copyright.title"
            defaultMessage="What about copyright?"
          />
        </h2>
        <p>
          <FormattedMessage
            id="human-terms.copyright.paragraph.1"
            defaultMessage="I do not claim exclusive or ownership rights on your artworks by any means. Your work is owned by you and no one else. However, for the sake of being safe legally, I use very similar licensing to the sites like Instagram, DeviantArt or 500px. That means I am able to show and distribute your work."
          />
        </p>
        <p>
          <FormattedMessage
            id="human-terms.copyright.paragraph.2"
            defaultMessage="Important notice: if you at any time would like to remove your work from Zetter Gallery, you are free to do that. But there's no mechanism to retract paintings from players' servers, and no guarantees that it will be implemented. I am not responsible for what people might do with your paintings."
          />
        </p>
        <p>
          <FormattedMessage
            id="human-terms.copyright.paragraph.3"
            defaultMessage="Things happen that someone might steal your work. That's bad because only you can decide where your work might appear. If that happened, please, contact me on Discord or email copyright@zetter.gallery, providing some proof that you own the work."
          />
        </p>
        <h2>
          <FormattedMessage
            id="human-terms.moderation.title"
            defaultMessage="What about moderation?"
          />
        </h2>
        <p>
          <FormattedMessage
            id="human-terms.moderation.paragraph.1"
            defaultMessage="I understand that art means different things for different people. Also, I understand that different people would prefer to see different things. With this in mind, I came to a conclusion: the moderation will be performed, perfectly, by community moderators. Our rules won't be censoring anything specifically, rather creating a 'ratings' for paintings."
          />
        </p>
        <p>
          <FormattedMessage
            id="human-terms.moderation.paragraph.2"
            defaultMessage="I keep the right for moderators to retract or just deny your painting, if the content is very disruptive. I understand that its vague definition, but hopefully, the paintings will rarely be straight discarded. Instead, according ratings will be applied before approval. Those rating may include things like Gambling, Nudity, etc. — you can see the whole list at your player preferences page. This list is subject to extension, and the defaults will be rather 'family-friendly'. This by no means that this mod is good for kids, any kind of online activity needs parental guidance."
          />
        </p>
        <p>
          <FormattedMessage
            id="human-terms.moderation.paragraph.2"
            defaultMessage="Moderators can make mistakes and discard or wrongly rate painting. Please be understanding that it's just people who put their free time for everyone's good. Be patient and talk to us if that happened."
          />
        </p>
        <p>
          <FormattedMessage
            id="human-terms.moderation.paragraph.3"
            defaultMessage="I strictly recommend this mod and service only for legal age players. Registering here without reaching legal age should not be possible by Microsoft oAuth rules and breaks ToS."
          />
        </p>
        <h2>
          <FormattedMessage
            id="human-terms.complications.title"
            defaultMessage="What are the complications?"
          />
        </h2>
        <p>
          <FormattedMessage
            id="human-terms.complications.paragraph.1"
            defaultMessage="I am just a human being. I won't be able to protect your work in court or do any complicated legal stuff regarding copyright. I resign from any responsibility for the things going on here, in a reasonable range. For own safety I would assume good intentions from anyone making a claim."
          />
        </p>
        <p>
          <FormattedMessage
            id="human-terms.complications.paragraph.1"
            defaultMessage="Also, I am a Russian citizen, that means that it could be possible that by local law I'll be obligated to move service data to Russian service providers if there are enough Russian users. However, if this service grows big enough, I'll try to pass legal ownership to someone in EU borders who can work with this stuff."
          />
        </p>
        <br />
        <p>
          <FormattedMessage
            id="human-terms.end.thank-you"
            defaultMessage="Thank you for reading. Feel free to talk to me if you have any questions."
          />
        </p>
      </DefaultLayout>
    </>
  );
};

export default TermsPage;
