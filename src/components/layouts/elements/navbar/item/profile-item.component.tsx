import React, { memo } from 'react';
import styles from './item.module.scss';
import Link from 'next/link';
import { Icon, IconSize } from '@components/icon';
import { injectClassNames } from '@/utils/css';
import { AuthContext } from '@/context/auth.context';
import { useIntl } from 'react-intl';
import Sparkles from '@components/vanity/sparkles';
import { StaticImageData } from 'next/image';

export interface ItemProps {
  name: string;
  active: boolean;
  loading: boolean;
  asset: StaticImageData;
  uri: string;
  className: string;
  large: boolean;
}

const NavbarProfileItem = (props: ItemProps): JSX.Element => {
  const intl = useIntl();

  return (
    <li>
      <AuthContext.Consumer>
        {({ player }) => {
          return player ? (
            <Link href="/players/me">
              <button
                title={player.nickname}
                className={injectClassNames(props.className)}
              >
                {props.active && <Sparkles />}
                <div className={styles['profile-wrapper']}>
                  <Icon
                    asset={props.asset}
                    title={props.name}
                    className={injectClassNames(styles['icon'], [
                      styles['loading'],
                      props.loading,
                    ])}
                    size={props.large ? IconSize.Large : IconSize.Regular}
                  />
                  <img
                    alt={intl.formatMessage({
                      id: 'navbar.profile.avatar',
                      defaultMessage: 'Your profile avatar',
                    })}
                    // @todo: load from js with retries to wait for queue processing for new players
                    src={`${process.env.NEXT_PUBLIC_STATIC_URI}/generated/players/${player.uuid}/avatar.png`}
                    className={injectClassNames(
                      styles['profile-avatar'],
                      'pixelated-images',
                    )}
                  />
                </div>
              </button>
            </Link>
          ) : (
            <Link href={props.uri}>
              <button
                title={props.name}
                className={injectClassNames(props.className)}
              >
                <div className={styles['profile-wrapper']}>
                  <Icon
                    asset={props.asset}
                    title={props.name}
                    className={injectClassNames(styles['icon'], [
                      styles['loading'],
                      props.loading,
                    ])}
                    size={props.large ? IconSize.Large : IconSize.Regular}
                  />
                  <img
                    alt={intl.formatMessage({
                      id: 'navbar.profile.avatar.default',
                      defaultMessage: 'Anonymous avatar',
                    })}
                    src="/assets/herobrine.png"
                    className={injectClassNames(
                      styles['profile-avatar'],
                      'pixelated-images',
                    )}
                  />
                </div>
              </button>
            </Link>
          );
        }}
      </AuthContext.Consumer>
    </li>
  );
};

NavbarProfileItem.defaultProps = {
  large: false,
  loading: false,
};

export default memo(NavbarProfileItem);
