import React, { memo, PropsWithChildren } from "react";
import styles from './item.module.scss';
import Link from 'next/link';
import { Icon, IconSize } from '@components/icon';
import { injectClassNames } from '@/utils/css';
import Sparkles from "@components/vanity/sparkles";
import { StaticImageData } from "next/image";

export interface ItemProps {
  active: boolean;
  title: string;
  asset: StaticImageData;
  uri: string;
  className: string;
  large: boolean;
}

const NavbarItem = (props: PropsWithChildren<ItemProps>): JSX.Element => {
  return (
    <li>
      <Link href={props.uri}>
        <button
          title={props.title}
          className={injectClassNames(props.className)}
        >
          {props.active && <Sparkles />}
          <Icon
            asset={props.asset}
            title={props.title}
            size={props.large ? IconSize.Large : IconSize.Regular}
          />
          {props.children}
        </button>
      </Link>
    </li>
  );
}

NavbarItem.defaultProps = {
  large: false,
};

export default memo(NavbarItem);
