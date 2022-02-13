import React, { memo } from 'react';
import styles from './NavbarItem.module.scss';
import Link from 'next/link';
import { EIconSize, Icon } from '@components/icon';
import { injectClassNames } from '@/utils/css';
import { AuthContext } from '@/context/Auth.context';

export interface ItemProps {
  className: string;
  large: boolean;
  name: string;
  uri: string;
  icon: string;
  active: boolean;
}

function NavbarProfileItem(props: ItemProps): JSX.Element {
  return (
    <li>
      <AuthContext.Consumer>
        {({ player }) => {
          return player ? (<Link href='/players/me'>
            <a title={player.nickname}
               className={injectClassNames(styles[props.icon], props.className, props.active ? styles['active'] : undefined)}>
              <Icon
                asset={props.icon}
                className={styles['icon']}
                size={props.large ? EIconSize.Large : EIconSize.Regular}
              />
              <img src={`/static/generated/players/${player.uuid}/avatar.png`}
                   className={injectClassNames(styles['profile-avatar'], 'pixelated-images')} />
            </a>
          </Link>) : (<Link href={props.uri}>
            <a title={props.name}
               className={injectClassNames(styles[props.icon], props.className, props.active ? styles['active'] : undefined)}>
              <Icon asset={props.icon} className={styles['icon']}
                    size={props.large ? EIconSize.Large : EIconSize.Regular} />
              <img src='/assets/fran.png' className={injectClassNames(styles['profile-avatar'], 'pixelated-images')} />
            </a>
          </Link>);
        }}
      </AuthContext.Consumer>
    </li>
  );
}

NavbarProfileItem.defaultProps = {
  large: false,
};

export default memo(NavbarProfileItem);