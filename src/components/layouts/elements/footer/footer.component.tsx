import React from 'react';
import styles from './footer.module.scss';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

const { footer } = styles;

const Footer = (): JSX.Element => {
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
          defaultMessage="Zetter Gallery is licensed under closed license and MPL2, developed by Dmitry Burlakov (@dantaeusb) and translated by contributors."
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
              id="footer.legal.learn-more"
              defaultMessage="Terms of service"
            />
          </a>
        </Link>
        <span> | </span>
        <Link href="/credits">
          <a>
            <FormattedMessage
              id="footer.legal.credits"
              defaultMessage="Credits"
            />
          </a>
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
