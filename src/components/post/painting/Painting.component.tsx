import React from 'react';
import {usePageWidth} from 'hooks/events';
import {PaintingProps} from '../Post.component';
import styles from './Painting.module.scss';

export default function Painting(props: PaintingProps): JSX.Element {
  const pageWidth = usePageWidth();

  const scaling = Math.floor(pageWidth / props.originalSize.width);
  const pictureWidth = props.originalSize.width * scaling;

  return (
    <div className={ styles['painting-wrapper'] } >
      <img src={ props.uri } alt={ `"${props.name}" by ${props.author.nickname}` } className={ styles['painting'] } />
    </div>
  );
}