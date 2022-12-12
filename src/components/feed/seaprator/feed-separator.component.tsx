import React from 'react';
import Tippy from '@tippyjs/react';
import { useIntl } from 'react-intl';
import { FeedTypes } from "@/const/feed-types";
import styles from './feed-separator.module.scss';
import HotIcon from '@assets/icons/feed/hot.png';
import NewIcon from '@assets/icons/feed/new.png';
import TopIcon from '@assets/icons/feed/top.png';
import { Icon } from "@components/icon";

export interface FeedSeparatorProps {
  code: FeedTypes;
}

export default function FeedSeparator({
  code,
}: FeedSeparatorProps): JSX.Element {
  const intl = useIntl();
  const feedInfo: Record<FeedTypes, { title: string, info: string, icon: StaticImageData }> = {
    popular: {
      title: intl.formatMessage({id: 'feed.popular.title', defaultMessage: 'Popular'}),
      info: intl.formatMessage({id: 'feed.popular.info', defaultMessage: 'Small selection from best of the best'}),
      icon: TopIcon,
    },
    hot: {
      title: intl.formatMessage({id: 'feed.popular.title', defaultMessage: 'Hot'}),
      info: intl.formatMessage({id: 'feed.popular.info', defaultMessage: 'Trending paintings that got attention in the previous batches'}),
      icon: HotIcon,
    },
    new: {
      title: intl.formatMessage({id: 'feed.popular.title', defaultMessage: 'New'}),
      info: intl.formatMessage({id: 'feed.popular.info', defaultMessage: 'Freshly baked, just submitted to the Gallery'}),
      icon: NewIcon,
    },
    personal: {
      title: intl.formatMessage({id: 'feed.popular.title', defaultMessage: 'Personal'}),
      info: intl.formatMessage({id: 'feed.popular.info', defaultMessage: 'Your personal selection: random picks from favorites'}),
      icon: TopIcon,
    },
  };

  return (
    <Tippy content={feedInfo[code].info} theme="minecraft" placement={'bottom-end'}>
      <div className={styles['feed-separator']}>
        <h2 className={styles['feed-title']}>{feedInfo[code].title}</h2>
        <Icon title={feedInfo[code].title} asset={feedInfo[code].icon} className={styles['feed-icon']} />
      </div>
    </Tippy>
  );
}
