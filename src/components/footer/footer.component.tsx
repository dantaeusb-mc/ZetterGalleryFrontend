import React from 'react';
import styles from './footer.module.scss';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

const { footer } = styles;

export default function Footer(): JSX.Element {
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
        <Link href="/legal">
          <a>
            <FormattedMessage
              id="footer.legal.learn-more"
              defaultMessage="Learn more."
            />
          </a>
        </Link>
      </small>
    </footer>
  );
}
