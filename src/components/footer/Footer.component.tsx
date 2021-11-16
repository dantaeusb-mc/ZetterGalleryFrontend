import React from 'react';
import styles from './Footer.module.scss';

const {
  footer
} = styles;

export default function Footer(): JSX.Element {
  return (
    <footer className={ footer }>
      <p>© Zetter — Minecraft™ Painting Mod</p>
      <small>Minecraft and associated Minecraft images are copyright of Mojang AB.</small>
      <small>Zetter Gallery is not affiliated with Minecraft, Microsoft and Mojang AB.</small>
    </footer>
  );
}
