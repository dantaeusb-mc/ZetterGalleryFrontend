import React from 'react';
import { FormattedMessage } from 'react-intl';
import Post, { PaintingPostProps } from '@components/post/post.component';

export interface PlayerPaintingListProps {
  paintings: PaintingPostProps[];
}

export default function PlayerPaintingList({
  paintings,
}: PlayerPaintingListProps): JSX.Element {
  if (paintings.length) {
    return (
      <>
        {paintings.map((paintingProps, index) => (
          <Post key={`painting-${index}`} {...paintingProps} />
        ))}
      </>
    );
  } else {
    return (
      <div>
        <FormattedMessage
          id="components.player.plaintings.list.empty"
          defaultMessage="This player didn't submit any paintings yet!"
        />
      </div>
    );
  }
}
