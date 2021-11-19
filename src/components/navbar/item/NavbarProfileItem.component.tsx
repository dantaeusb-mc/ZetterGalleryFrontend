import React, {memo} from 'react';
import styles from './NavbarItem.module.scss';
import Link from "next/link";
import {EIconSize, Icon} from "@components/icon";
import {injectClassNames} from "@/utils/css";

export interface ItemProps {
  className: string
  large: boolean
  name: string
  uri: string
  icon: string
  active: boolean
}

function NavbarProfileItem(props: ItemProps): JSX.Element {
  return (
    <li>
      <Link href={ props.uri }><a title={ props.name } className={ injectClassNames(styles[props.icon], props.className, props.active ? styles['active'] : undefined) }>
        <Icon asset={ props.icon } className={ styles['icon'] } size={ props.large ? EIconSize.Large : EIconSize.Regular } />
        <img src="/assets/herobrine.png" className={ injectClassNames(styles['profile-avatar'], 'pixelated-images') } />
      </a></Link>
    </li>
  );
}

NavbarProfileItem.defaultProps = {
  large: false
}

export default memo(NavbarProfileItem);