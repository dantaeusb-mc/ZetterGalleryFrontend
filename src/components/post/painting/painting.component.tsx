import React from 'react';
import { pageWidth } from 'hooks/events';
import { PaintingProps } from '../post.component';
import styles from './painting.module.scss';
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

  const aspectRatio = Math.min(
    props.originalSize.height / props.originalSize.width,
    1,
  );
  const percentage = Math.round(aspectRatio * 100);

  return (
    <div className={styles['painting-wrapper']} style={{ paddingTop: `${percentage}%` }}>
      <img src={props.image} alt={alt} className={styles['painting']} />
    </div>
  );
}
