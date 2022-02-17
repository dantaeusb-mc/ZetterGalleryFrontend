import React, { PropsWithChildren } from 'react';
import { injectClassNames } from '@/utils/css';
import styles from './slice-link.module.scss';
import { Icon, IconSize } from '@components/icon';
import Link from 'next/link';

type ButtonProps = {
  title: string;
  uri: string;
  className?: string;
};

function SliceLink({
  title,
  uri,
  className,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element {
  // @todo: dumb but location not available on SSR
  const host = 'zetter.gallery';

  const fullPath = ['http://', 'https://', '//'].find((value) =>
    uri.startsWith(value),
  );

  const external = fullPath
    ? RegExp('^(https?:)?//(?!' + host + ')').test(uri)
    : false;

  return (
    <Link href={uri}>
      <a
        className={injectClassNames(styles['slice-button'], className)}
        title={title}
        {...(external ? { target: '_blank' } : {})}
      >
        <div className={styles['slice-button-inner']}>
          <Icon asset="home" className={styles['icon']} size={IconSize.Large} />
          <div className={styles['slice-button-text']}>{children}</div>
        </div>
      </a>
    </Link>
  );
}

export default SliceLink;
