import React, { memo, PropsWithChildren } from "react";
import styles from './item.module.scss';
import Link from 'next/link';
import { Icon, IconSize } from '@components/icon';
import { injectClassNames } from '@/utils/css';
import Sparkles from "@components/vanity/sparkles";

export interface ItemProps {
  active: boolean;
  title: string;
  asset: StaticImageData;
  uri: string;
  colorVar: string;
  className: string;
  large: boolean;
}

const NavbarItem = (props: PropsWithChildren<ItemProps>): JSX.Element => {
  return (
    <li>
      <Link href={props.uri}>
        <a
          title={props.title}
          className={injectClassNames(
            props.className,
          )}
        >
          {props.active && <Sparkles color={`var(${props.colorVar})`} />}
          <Icon
            asset={props.asset}
            title={props.title}
            className={props.className}
            size={props.large ? IconSize.Large : IconSize.Regular}
          />
          {props.children}
        </a>
      </Link>
    </li>
  );
}

NavbarItem.defaultProps = {
  large: false,
};

export default memo(NavbarItem);
