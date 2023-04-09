import React, { useEffect, useState } from 'react';
import styles from './cycle-info.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { Icon, IconSize } from '@components/icon';
import MerchantIcon from './icons/merchant.png';
import RefreshIcon from '@assets/icons/cycle/refresh.png';
import TimeoutIcon from '@assets/icons/cycle/timeout.png';
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

  const [autoReload, setAutoReload] = useState(false);
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
    } else {
      launchTimeout();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeLeft]);

  useEffect(() => {
    // If the current cycle has ended some time ago, stop the auto reload
    // This is to prevent the page from reloading eternally if something went wrong
    // And no new cycles are created
    if (endsAt.getTime() - new Date().getTime() < -1000) {
      setAutoReload(false);
    }
  }, []);

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

  const expired = timeLeft <= 0;

  return (
    <section className={injectClassNames(styles['cycle-info'])}>
      <header className={styles['cycle-info-header']}>
        <div className={styles['cycle-icon-wrapper']}>
          <div className={styles['cycle-icon-circle']}>
            <Icon
              title={intl.formatMessage({
                id: 'cycle.merchant.icon',
                defaultMessage:
                  'Some of those paintings are available for purchase from Painting Merchant in game right now!',
              })}
              asset={MerchantIcon}
              className={styles['cycle-icon']}
              size={IconSize.ExtraLarge}
            />
          </div>
        </div>
        <div className={styles['cycle-description-wrapper']}>
          <h1 className={styles['cycle-title']}>
            <FormattedMessage
              id="cycle.batch.no"
              defaultMessage="Batch no"
            ></FormattedMessage>{' '}
            #{id}
          </h1>
          <div className={styles['cycle-timeout']}>
            <div className={styles['cycle-timeout-icon-wrapper']}>
              <Icon
                title={intl.formatMessage({
                  id: 'cycle.merchant.timeout.icon',
                  defaultMessage:
                    'Some of those paintings are available for purchase from Painting Merchant in game right now!',
                })}
                asset={TimeoutIcon}
                className={injectClassNames(
                  styles['cycle-timeout-icon'],
                  [styles['expired'], expired],
                )}
              />
            </div>
            {expired ? (
              <div className={styles['timeout-expired']}>
                <FormattedMessage
                  id="cycle.timeout.expired"
                  defaultMessage="Cycle expired!"
                ></FormattedMessage>
              </div>
            ) : (
              <div className={styles['timeout-text']}>
                <FormattedMessage
                  id="cycle.timeout.left-time"
                  defaultMessage="Expires in {time}"
                  values={{
                    time: formatTimeout(timeLeft),
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles['cycle-actions-wrapper']}>
          <button
            type="button"
            className={styles['refresh-button']}
            title={intl.formatMessage({
              id: 'cycle.refresh.button',
              defaultMessage:
                'Refresh available paintings, rotation happens every 5 minutes',
            })}
            disabled={!expired}
          >
            <Icon
              title={intl.formatMessage({
                id: 'cycle.refresh.button.icon',
                defaultMessage: 'Refresh available paintings icon',
              })}
              asset={RefreshIcon}
              className={styles['refresh-icon']}
              size={IconSize.Large}
            />
          </button>
        </div>
      </header>
      <div className={styles['cycle-info-extra']}>
        <label htmlFor="auto-reload">
          <Tippy
            content={intl.formatMessage({
              id: 'cycle.auto-reload',
              defaultMessage:
                'Automatically reload the page at the end of the cycle.',
            })}
            placement="bottom-start"
            theme="minecraft"
          >
            <div
              className={injectClassNames(styles['auto-reload'], [
                styles['active'],
                autoReload,
              ])}
            >
              <input
                type="checkbox"
                id="auto-reload"
                checked={autoReload}
                onChange={(e) => {
                  setAutoReload(e.target.checked);
                }}
              />
              <span>
                <FormattedMessage
                  id="cycle.auto-reload.label"
                  defaultMessage="Auto-reload: {status}"
                  values={{
                    status: autoReload ? (
                      <FormattedMessage id="common.on" defaultMessage="On" />
                    ) : (
                      <FormattedMessage id="common.off" defaultMessage="Off" />
                    ),
                  }}
                />
              </span>
            </div>
          </Tippy>
        </label>
        <Tippy
          content={intl.formatMessage({
            id: 'cycle.seed',
            defaultMessage:
              'Seed phrase, used to select which paintings you will get from Merchant! Exact set of paintings is determined by this phrase, Merchant level and your settings.',
          })}
          placement="bottom-end"
          theme="minecraft"
        >
          <div className={styles['cycle-seed']}>{seed}</div>
        </Tippy>
      </div>
    </section>
  );
}
