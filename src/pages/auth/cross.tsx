import React from 'react';
import { ServerWidget } from '@components/widgets/server';
import Head from 'next/head';
import CleanLayout from '@components/layouts/clean';
import { FormattedMessage } from 'react-intl';
import { injectClassNames } from '@/utils/css';
import styles from './auth.module.scss';
import ConsentButton from '@components/auth/consentButton';
import { GetServerSideProps, NextPage, NextPageContext } from "next";
import buildQuery from '@/utils/request/build-query';
import { apiGet } from '@/utils/request';
import { HttpCodeError } from '@/utils/request/api-get';
import { MessageResponseDto } from '@/dto/response/message.dto';
import { ConsentInfoResponseDto } from "@/dto/response/auth/consent-info.dto";
import { getCookie } from "cookies-next";
import { ActionResponseDto } from "@/dto/response/action.dto";

export default function AuthCross(): JSX.Element {
  return (
    <>
      <Head>
        <title>Please update Zetter Gallery</title>
        <meta
          name="description"
          content={`Please update Zetter Gallery`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CleanLayout>
        <section className={injectClassNames('block', 'sans-serif-font', styles['auth-prompt'])}>
          <header className={styles['heading']}>
            <h1>
              Please update Zetter Gallery
            </h1>
          </header>
          <div className={styles['disclaimer-wrapper']}>
            <h2>
              <FormattedMessage
                id="auth-prompt.deprecated.title"
                defaultMessage="Why do I need that?"
                description="Title for request explanation"
              />
            </h2>
            <div className={styles['disclaimer']}>
              <p>
                <FormattedMessage
                  id="auth-prompt.deprecated.disclaimer.why"
                  defaultMessage="Since the release of your version we have updated Zetter Gallery to be more secure and futureproof."
                />
              </p>
              <p>
                <FormattedMessage
                  id="auth-prompt.deprecated.disclaimer.what-for"
                  defaultMessage="Your version is no longer supported, sorry. Updating to a new version will allow anonymous usage (painting purchase) and easier painting upload."
                />
              </p>
            </div>
          </div>
          <footer className={styles['footer']}>
            {'Thank you for paying attention.'}
          </footer>
        </section>
      </CleanLayout>
    </>
  );
}