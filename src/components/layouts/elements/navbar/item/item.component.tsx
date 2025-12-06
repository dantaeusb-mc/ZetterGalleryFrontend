import React, { memo, PropsWithChildren } from 'react';
import styles from './item.module.scss';
import Link from 'next/link';
import { Icon, IconSize } from '@components/icon';
import { injectClassNames } from '@/utils/css';
import Sparkles from '@components/vanity/sparkles';
import { StaticImageData } from 'next/image';

export interface ItemProps {
  active: boolean;
  loading: boolean;
  title: string;
  asset: StaticImageData;
  uri: string;
  className: string;
  large: boolean;
}

const NavbarItem = ({
  active,
  loading = false,
  title,
  asset,
  uri,
  className,
  large = false,
  children,
}: PropsWithChildren<ItemProps>): JSX.Element => {
  return (
    <li>
      <Link href={uri}>
        <button title={title} className={injectClassNames(className)}>
          {active && <Sparkles />}
          <Icon
            asset={asset}
            title={title}
            size={large ? IconSize.Large : IconSize.Regular}
            className={injectClassNames(styles['icon'], [
              styles['loading'],
              loading,
            ])}
          />
          {children}
        </button>
      </Link>
    </li>
  );
};

export default memo(NavbarItem);
