import React from 'react';
import styles from './footer.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import Link from 'next/link';

const { footer } = styles;

const Footer = (): JSX.Element => {
  const intl = useIntl();

  return (
    <footer className={footer}>
      <p>© Zetter — Minecraft™ Painting Mod</p>
      <small className={'sans-serif-font'}>
        <FormattedMessage
          id="footer.legal.minecraft-copyright"
          defaultMessage="Minecraft and associated Minecraft images are copyright of Mojang AB."
        />
      </small>
      <small className={'sans-serif-font'}>
        <FormattedMessage
          id="footer.legal.affiliation"
          defaultMessage="Zetter Gallery is not affiliated with Minecraft, Microsoft and Mojang AB."
        />
      </small>
      <br />
      <small className={'sans-serif-font'}>
        <FormattedMessage
          id="footer.legal.developer"
          defaultMessage="Zetter Gallery is licensed mostly under MPL2 and partially with reserved rights, developed by {author} and {contributors}."
          values={{
            author: (
              <a
                title={intl.formatMessage({
                  id: 'footer.legal.developer.author',
                  defaultMessage: 'Dmitry Burlakov (@dantaeusb)',
                  description: 'Author name and nickname',
                })}
                href="https://dantaeusb.me"
                target="_blank"
              >
                <FormattedMessage
                  id="footer.legal.developer.author"
                  defaultMessage="Dmitry Burlakov (@dantaeusb)"
                  description="Author name and nickname"
                />
              </a>
            ),
            contributors: (
              <Link href="/contributors">
                <a
                  title={intl.formatMessage({
                    id: 'footer.legal.developer.contributors',
                    defaultMessage: 'Contributors',
                  })}
                >
                  <FormattedMessage
                    id="footer.legal.developer.contributors"
                    defaultMessage="Contributors"
                  />
                </a>
              </Link>
            ),
          }}
        />
      </small>
      <small className={'sans-serif-font'}>
        <Link href="/faq">
          <a>
            <FormattedMessage
              id="footer.legal.learn-more"
              defaultMessage="Learn more"
            />
          </a>
        </Link>
        <span> | </span>
        <Link href="/terms">
          <a>
            <FormattedMessage
              id="footer.legal.tos"
              defaultMessage="Terms of service"
            />
          </a>
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
