import React from 'react';
import styles from './Profile.module.scss';
import {FormattedMessage} from "react-intl";
import Badge from "@components/player/badge";
import {EBadgeTier} from "@components/player/badge/Badge.component";
import {injectClassNames} from "@/utils/css";

export interface IProfileProps {
  nickname: string
}

export default function Profile(props: IProfileProps): JSX.Element {
  return (<section className={ injectClassNames('block', styles['profile']) }>
    <header className={ styles['summary'] }>
      <img src="/assets/fran.png" className={ injectClassNames('pixelated-images', styles['userpic']) } title={`${ props.nickname }'s Minecraft avatar`} alt={ `Small picture depicting ${ props.nickname }'s Minecraft in-game character's face` }  />
      <div className={ styles['description'] }>
        <h1 className={ styles['nickname'] }>{ props.nickname }</h1>
        <p className={ injectClassNames(styles['motto'], styles['editable']) }>{ 'You miss 100 percent of the shots you don\'t take.' }</p>
      </div>
    </header>
    <div className={ styles['badge-wrapper'] }>
      <Badge title={'Launch Artist'} tier={EBadgeTier.Legendary} />
      <Badge title={'Community\'s Favourite'} tier={EBadgeTier.Epic} />
      <Badge title={'Alpha Supporter'} tier={EBadgeTier.Rare} />
    </div>
    <footer className={ styles['statistics'] }>
      <div className={ styles['statistics-element'] }>
        <FormattedMessage id="profile.count.paintings" defaultMessage="Paintings:"
          description="Amount of submitted paintings showing in player's profile" />
        <br />
        { 1 }
      </div>
      <div className={ styles['statistics-element'] }>
        <FormattedMessage id="profile.count.favorites" defaultMessage="Favorites:"
          description="Amount of favorite marks put on player's paintings in player's profile" />
        <br />
        152
      </div>
      <div className={ styles['statistics-element'] }>
        <FormattedMessage id="profile.count.earnings" defaultMessage="Earnings:"
          description="Amount of total emeralds spent on player's paintings showing in player's profile" />
        <br />
        { 2742 }
      </div>
    </footer>
  </section>);
}
