import React from 'react';
import styles from './Profile.module.scss';
// @ts-ignore
import Quote from 'inspirational-quotes';
import {FormattedMessage} from "react-intl";
import Badge from "@components/badge";
import {EBadgeTier} from "@components/badge/Badge.component";
import {injectClassNames} from "@/utils/css";

export interface IProfileProps {
  nickname: string
}

export default function Profile(props: IProfileProps): JSX.Element {
  return (<section className={ injectClassNames('block', styles['profile']) }>
    <header className={ styles['summary'] }>
      <img className={ styles['userpic'] } title={`${ props.nickname }'s Minecraft avatar`} alt={ `Small picture depicting ${ props.nickname }'s Minecraft in-game character's face` }  />
      <div className={ styles['description'] }>
        <h1 className={ styles['nickname'] }>{ props.nickname }</h1>
        <p className={ injectClassNames(styles['motto'], styles['editable']) }>{ Quote.getQuote().text }</p>
      </div>
    </header>
    <div className={ styles['badge-wrapper'] }>
      <Badge title={'Launch Artist'} tier={EBadgeTier.Legendary} />
      <Badge title={'Community\'s Favourite'} tier={EBadgeTier.Epic} />
      <Badge title={'Alpha Supporter'} tier={EBadgeTier.Rare} />
      <Badge title={'Super Productive'} tier={EBadgeTier.Uncommon} />
      <Badge title={'Thousand-o-naire'} tier={EBadgeTier.Common} />
      <Badge title={'Beta Supporter'} tier={EBadgeTier.Common} />
    </div>
    <footer className={ styles['statistics'] }>
      <div className={ styles['statistics-element'] }>
        <FormattedMessage id="profile-paintings-count" defaultMessage="Paintings:"
          description="Amount of submitted paintings showing in player's profile" />
        <br />
        { 100 }
      </div>
      <div className={ styles['statistics-element'] }>
        <FormattedMessage id="profile-favorites-count" defaultMessage="Favorites:"
          description="Amount of favorite marks put on player's paintings in player's profile" />
        <br />
        512
      </div>
      <div className={ styles['statistics-element'] }>
        <FormattedMessage id="profile-earnings-amount" defaultMessage="Earnings:"
          description="Amount of total emeralds spent on player's paintings showing in player's profile" />
        <br />
        { 7532 }
      </div>
    </footer>
  </section>);
}
