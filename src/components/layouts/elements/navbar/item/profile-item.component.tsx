import React, { memo } from 'react';
import styles from './item.module.scss';
import Link from 'next/link';
import { Icon, IconSize } from '@components/icon';
import { injectClassNames } from '@/utils/css';
import { AuthContext } from '@/context/auth.context';
import { useIntl } from 'react-intl';

export interface ItemProps {
  className: string;
  large: boolean;
  name: string;
  uri: string;
  icon: string;
  active: boolean;
}

const NavbarProfileItem = (props: ItemProps): JSX.Element => {
  const intl = useIntl();

  return (
    <li>
      <AuthContext.Consumer>
        {({ player }) => {
          return player ? (
            <Link href="/players/me">
              <a
                title={player.nickname}
                className={injectClassNames(
                  styles[props.icon],
                  props.className,
                  props.active ? styles['active'] : undefined,
                )}
              >
                <Icon
                  asset={props.icon}
                  className={styles['icon']}
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
              </a>
            </Link>
          ) : (
            <Link href={props.uri}>
              <a
                title={props.name}
                className={injectClassNames(
                  styles[props.icon],
                  props.className,
                  props.active ? styles['active'] : undefined,
                )}
              >
                <Icon
                  asset={props.icon}
                  className={styles['icon']}
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
              </a>
            </Link>
          );
        }}
      </AuthContext.Consumer>
    </li>
  );
};

NavbarProfileItem.defaultProps = {
  large: false,
};

export default memo(NavbarProfileItem);
