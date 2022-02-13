import React from 'react';
import { usePageWidth } from 'hooks/events';
import { PaintingProps } from '../Post.component';
import styles from './Painting.module.scss';
import { useIntl } from 'react-intl';

export default function Painting(props: PaintingProps): JSX.Element {
  const intl = useIntl();

  const alt = intl.formatMessage(
    {
      id: 'common.post.painting.alt',
      defaultMessage: '{paintingName} by {username}',
    },
    {
      paintingName: props.name,
      username: props.author.nickname,
    },
  );

  const pageWidth = usePageWidth();

  const scaling = Math.floor(pageWidth / props.originalSize.width);
  const pictureWidth = props.originalSize.width * scaling;

  return (
    <div className={styles['painting-wrapper']}>
      <img src={props.image} alt={alt} className={styles['painting']} />
    </div>
  );
}
