import Link from 'next/link';
import React from 'react';
import styles from './Author.module.scss';
import {IPaintingProps} from "@components/post/Post.component";

export default function Author(props: IPaintingProps): JSX.Element {
  return (
    <Link href={ props.author.uri }>
      <a>
        <header className={ styles['post-header'] } >
          <div className={ styles['profile-picture-wrapper'] }>
            <picture>
              <img src={ props.author.nickname } title={ props.author.nickname } alt={ `${ props.author.nickname }'s Profile Picture` } />
            </picture>
          </div>
          <div className={ styles['profile-name-wrapper'] }>
            <span>{ props.author.nickname }</span>
          </div>
        </header>
      </a>
    </Link>
  );
}