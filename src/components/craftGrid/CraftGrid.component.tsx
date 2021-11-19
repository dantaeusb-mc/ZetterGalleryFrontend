import React from 'react';
import styles from './CraftGrid.module.scss';
import {injectClassNames} from "@/utils/css";
import CraftItem, {IItemProps} from "@components/craftItem/CraftItem.component";

type IGridItem = IItemProps | null;
export type IItemGrid = [IGridItem, IGridItem, IGridItem, IGridItem, IGridItem, IGridItem, IGridItem, IGridItem, IGridItem]

export interface ICraftingGridProps {
  items: IItemGrid,
  output: IItemProps,
  shapeless: boolean
}

export default function CraftGrid(props: ICraftingGridProps): JSX.Element {
  return (
    <div className={ injectClassNames(styles['crafting-grid'], 'pixelated-images') }>
      <div className={ styles['input'] }>
        <div className={ styles['slot'] }>
          { props.items[0] !== null ? <CraftItem { ...props.items[0] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[1] !== null ? <CraftItem { ...props.items[1] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[2] !== null ? <CraftItem { ...props.items[2] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[3] !== null ? <CraftItem { ...props.items[3] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[4] !== null ? <CraftItem { ...props.items[4] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[5] !== null ? <CraftItem { ...props.items[5] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[6] !== null ? <CraftItem { ...props.items[6] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[7] !== null ? <CraftItem { ...props.items[7] } /> : '' }
        </div>
        <div className={ styles['slot'] }>
          { props.items[8] !== null ? <CraftItem { ...props.items[8] } /> : '' }
        </div>
      </div>
      <div className={ styles['arrow'] } />
      <div className={ injectClassNames(styles['slot'], styles['out-slot']) }>
        <CraftItem { ...props.output } />
      </div>
      { props.shapeless === true ? <div className={ styles['shapeless-icon'] } /> : '' }
    </div>
  );
}
