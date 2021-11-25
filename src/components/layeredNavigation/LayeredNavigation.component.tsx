import React from 'react';
import styles from './LayeredNavigation.module.scss';
import {injectClassNames} from "@/utils/css";
import {Direction, IPaintingListQuery, PaintingQueryUpdateFn, PaintingSorting} from "@/pages";
import SortAscIcon from 'assets/sort-asc.svg';
import SortDescIcon from 'assets/sort-desc.svg';
import {FormattedMessage} from "react-intl";
import {Icon} from "@components/icon";

export interface ILayeredNavigationProps {
  updateLayer: PaintingQueryUpdateFn,
  currentQuery: IPaintingListQuery
}

type PaintingQueryCheckFn = <K extends keyof IPaintingListQuery>(param: K, value: IPaintingListQuery[K]) => boolean;

export default function LayeredNavigation({ updateLayer, currentQuery }: ILayeredNavigationProps): JSX.Element {
  const isActive: PaintingQueryCheckFn = (param, value) => {
    return currentQuery[param] === value;
  }

  return (<>
    <div className={ styles['layered-navigation-sort'] }>
      <button className={ injectClassNames(styles['button'], styles['sort-by-button'], styles['sort-by-hot'], (isActive('sort', PaintingSorting.SCORE) ? styles['active'] : undefined)) }
              type="button" onClick={ (e) => updateLayer('sort', PaintingSorting.SCORE) }>
        <Icon className={ styles['sort-icon'] } asset="fire" />
        <span className={ styles['sort-text'] }>
          <FormattedMessage id="paintings.layered-navigation.sort.hot" defaultMessage="Hot" description="Sort paintings by rating" />
        </span>
      </button>
      <button className={ injectClassNames(styles['button'], styles['sort-by-button'], styles['sort-by-top'], (isActive('sort', PaintingSorting.SALES_TOTAL) ? styles['active'] : undefined)) }
              type="button" onClick={ (e) => updateLayer('sort', PaintingSorting.SALES_TOTAL) }>
        <Icon className={ styles['sort-icon'] } asset="emerald" />
        <span className={ styles['sort-text'] }>
          <FormattedMessage id="paintings.layered-navigation.sort.top" defaultMessage="Top" description="Sort paintings by total sales count" />
        </span>
      </button>
      <button className={ injectClassNames(styles['button'], styles['sort-by-button'], styles['sort-by-new'], (isActive('sort', PaintingSorting.NEWEST) ? styles['active'] : undefined)) }
              type="button" onClick={ (e) => updateLayer('sort', PaintingSorting.NEWEST) }>
        <span className={ styles['sort-text'] }>
          <FormattedMessage id="paintings.layered-navigation.sort.new" defaultMessage="New" description="Sort paintings by creation date" />
        </span>
      </button>
      <div className={ styles['sort-by-dir'] } onClick={ (e) => updateLayer('dir', (isActive('dir', Direction.ASC) ? Direction.DESC : Direction.ASC)) }>
        { (isActive('dir', Direction.ASC) ? <SortAscIcon /> : <SortDescIcon />) }
      </div>
    </div>
    <div className={ styles['layered-navigation-resolution'] }>
      <div className={ styles['resolution-label'] }>
        <FormattedMessage id="paintings.layered-navigation.filter.resolution" defaultMessage="Resolution"
                          description="Filter paintings by resolution" />
      </div>
      <button className={ injectClassNames(styles['button'], styles['resolution-button'], (isActive('resolution', 16) ? styles['active'] : undefined)) }
              type="button" onClick={ (e) => updateLayer('resolution', 16) }>x16</button>
      <button className={ injectClassNames(styles['button'], styles['resolution-button'], (isActive('resolution', 32) ? styles['active'] : undefined)) }
              type="button" onClick={ (e) => updateLayer('resolution', 32) }>x32</button>
      <button className={ injectClassNames(styles['button'], styles['resolution-button'], (isActive('resolution', 64) ? styles['active'] : undefined)) }
              type="button" onClick={ (e) => updateLayer('resolution', 64) }>x64</button>
    </div>
  </>);
}
