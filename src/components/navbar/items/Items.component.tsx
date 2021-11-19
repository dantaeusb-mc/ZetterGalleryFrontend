import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Icon, EIconSize} from 'components/icon';
import styles from './Items.module.scss';
//import {useUser} from '../../../hooks/user';

export default function Items(): JSX.Element {

  return (
    <ul className={ styles['items'] }>
      <li>
        <Link href="/about"><a className={ styles['about'] }>
          <Icon asset="about" className={ styles['icon'] } />
        </a></Link>
      </li>
      <li>
        <Link href="/search"><a className={ styles['search'] }>
          <Icon asset="search" className={ styles['icon'] } />
        </a></Link>
      </li>
      <li>
        <Link href="/"><a>
          <Icon asset="home" size={ EIconSize.Large } />
        </a></Link>
      </li>
      <li>
        <Link href="/feed"><a className={ styles['sale'] } >
          <Icon asset="sale" className={ styles['icon'] } />
        </a></Link>
      </li>
      <li>
        <Link href="/auth/start"><a className={ styles['profile'] } >
          <Icon asset="profile" className={ styles['icon'] } />
          { /*<img src={ user.avatarUri } alt="Your Profile" />*/ }
          { /*<img src="/profile/placeholder.png" alt="Your Profile" />*/ }
        </a></Link>
      </li>
    </ul>
  );
}
