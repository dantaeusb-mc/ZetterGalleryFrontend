import React from 'react';
import styles from './CraftItem.module.scss';
import sprite from '../../../public/assets/items-sprite.png'

export interface IItemProps {
  name: string,
  uri: string,
  spritePos: {
    x: number,
    y: number
  },
  classic: boolean
}

export default function CraftItem(props: IItemProps): JSX.Element {
  return (
    <span className={ styles['item'] }>
      <a title={ `${props.name} on FANDOM Minecraft Wiki` } href={ props.uri } target="_blank" rel="noreferrer">
        <span className={ styles['sprite'] } style={ { backgroundPosition: `-${props.spritePos.x}px -${props.spritePos.y}px` } } />
      </a>
    </span>
  );
}
