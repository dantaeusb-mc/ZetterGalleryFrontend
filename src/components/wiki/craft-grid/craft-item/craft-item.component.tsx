import React from 'react';
import styles from './craft-item.module.scss';
import { injectClassNames } from '@/utils/css';
import Tippy from '@tippyjs/react';

export interface CraftItemProps {
  name: string;
  uri: string;
  spritePos: {
    x: number;
    y: number;
  };
  classic: boolean;
}

export default function CraftItem(props: CraftItemProps): JSX.Element {
  const title = props.classic
    ? `${props.name} on FANDOM Minecraft Wiki`
    : `${props.name} on Zetter Wiki`;
  const style = props.classic
    ? styles['classic-sprite']
    : styles['zetter-sprite'];

  return (
    <span className={styles['item']}>
      <Tippy content={props.name} theme="minecraft">
        <a title={title} href={props.uri} target="_blank" rel="noreferrer">
          <span
            className={injectClassNames(styles['sprite'], style)}
            style={{
              backgroundPosition: `-${props.spritePos.x}px -${props.spritePos.y}px`,
            }}
          />
        </a>
      </Tippy>
    </span>
  );
}
