import React, { useEffect, useState } from 'react';
import styles from './cycle-info.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { Icon, IconSize } from '@components/icon';
import MerchantIcon from './icons/merchant.png';
import NewIcon from '@assets/icons/feed/new.png';
import { injectClassNames } from '@/utils/css';
import Tippy from '@tippyjs/react';
import { useRouter } from 'next/router';

export interface CycleInfoProps {
  id: number;
  seed: string;
  startsAt: Date;
  endsAt: Date;
}

export default function CycleInfo({
  id,
  seed,
  startsAt,
  endsAt,
}: CycleInfoProps): JSX.Element {
  const intl = useIntl();
  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState(
    endsAt.getTime() - new Date().getTime(),
  );

  let timeout: ReturnType<typeof setTimeout>;

  const launchTimeout = () => {
    timeout = setTimeout(() => {
      setTimeLeft(endsAt.getTime() - new Date().getTime());
    }, 1000);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      router.reload();
    } else {
      launchTimeout();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeLeft]);

  useEffect(launchTimeout, []);

  const formatTimeout = (timeLeftIn: number) => {
    const minutes = Math.floor((timeLeftIn % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeftIn % (1000 * 60)) / 1000);

    let minutesString = minutes.toString();
    if (minutes <= 0) {
      minutesString = '0';
    }

    let secondsString = seconds.toString();
    if (seconds <= 0) {
      secondsString = '00';
    } else {
      while (secondsString.length < 2) secondsString = '0' + secondsString;
    }

    return minutesString + ':' + secondsString;
  };

  return (
    <section className={injectClassNames(styles['cycle-info'])}>
      <header className={styles['cycle-info-header']}>
        <div className={styles['merchant-icon-wrapper']}>
          <div className={styles['merchant-icon-circle']}>
            <Icon
              title={intl.formatMessage({
                id: 'cycle.merchant.icon',
                defaultMessage:
                  'Some of those paintings are available for purchase from Painting Merchant in game right now!',
              })}
              asset={MerchantIcon}
              className={styles['merchant-icon']}
              size={IconSize.ExtraLarge}
            />
          </div>
          <Icon
            title={intl.formatMessage({
              id: 'cycle.merchant.icon',
              defaultMessage:
                'Some of those paintings are available for purchase from Painting Merchant in game right now!',
            })}
            asset={NewIcon}
            className={styles['merchant-timeout-icon']}
          />
        </div>
        <div className={styles['cycle-description-wrapper']}>
          <h1 className={styles['cycle-title']}>
            <FormattedMessage
              id="cycle.batch.no"
              defaultMessage="Batch no"
            ></FormattedMessage>{' '}
            #{id}
          </h1>
          <Tippy
            content={intl.formatMessage({
              id: 'cycle.seed',
              defaultMessage:
                'Seed phrase, used to select which paintings you will get from Merchant! Exact set of paintings is determined by this phrase, Merchant level and your settings.',
            })}
            theme="minecraft"
          >
            <p className={styles['cycle-seed']}>{seed}</p>
          </Tippy>
        </div>
      </header>
      <p className={styles['timeout-text']}>
        <FormattedMessage
          id="cycle.timeout.left"
          defaultMessage="Expires in"
        ></FormattedMessage>
      </p>
      <div className={styles['timeout']}>{formatTimeout(timeLeft)}</div>
    </section>
  );
}
