import Link from 'next/link';
import React from 'react';
import {IUser} from "../../../stores/user";
import styles from './Author.module.scss';

export default function Author(props: IUser): JSX.Element {
  return (
    <Link href={ props.avatarUri }>
      <a>
        <header className={ styles['post-header'] } >
          <div className={ styles['profile-picture-wrapper'] }>
            <picture>
              <img src={ props.avatarUri } alt={ `${props.name}'s Profile Picture` } />
            </picture>
          </div>
          <div className={ styles['profile-name-wrapper'] }>
            <span>{ props.name }</span>
          </div>
        </header>
      </a>
    </Link>
  );
}