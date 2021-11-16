import React from 'react';
import {usePageWidth} from 'hooks/events';
import {IPaintingProps} from '../Post.component';
import styles from './Painting.module.scss';

export default function Painting(props: IPaintingProps): JSX.Element {  
  const pageWidth = usePageWidth();

  const scaling = Math.floor(pageWidth / props.originalSize.width);
  const pictureWidth = props.originalSize.width * scaling;

  console.log(pageWidth, scaling);

  return (
    <div className={ styles['painting-wrapper'] } >
      <img src={ props.uri } alt={ `"${props.name}" by ${props.authorName}` } className={ styles['painting'] }
             height={ 64 } width={ 64 }/>
    </div>
  );
}