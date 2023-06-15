import styles from './post.module.scss';
import { injectClassNames } from '@/utils/css';
import Post, { PostProps } from '@components/post/post.component';
import React, { PropsWithChildren, ReactNode } from 'react';
import TextPostExpandButton from '@components/post/text-expand/button.component';

export interface TextPostProps extends PostProps {
  short: ReactNode;
}

const TextPost = ({
  short,
  children,
  author,
}: PropsWithChildren<TextPostProps>): JSX.Element => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Post author={author} className={injectClassNames(
      styles['text-post'],
      'pixelated-images',
    )}>
      <div className={styles['content']}>
        {expanded ? children : short}
      </div>
      <TextPostExpandButton
        expanded={expanded}
        onClick={(e) => {
          setExpanded(!expanded);
        }}
      />
    </Post>
  );
};

export default TextPost;
