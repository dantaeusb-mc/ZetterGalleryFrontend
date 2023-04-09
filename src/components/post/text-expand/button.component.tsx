import styles from './button.module.scss';
import { injectClassNames } from '@/utils/css';
import { FormattedMessage } from 'react-intl';
import { MouseEventHandler } from 'react';

export interface TextPostExpandButtonProps {
  expanded: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const TextPostExpandButton = ({
  expanded,
  onClick,
}: TextPostExpandButtonProps): JSX.Element => {
  return (
    <button
      className={injectClassNames(styles['expand-button'], [
        styles['expanded'],
        false,
      ])}
      type="button"
      onClick={onClick}
    >
      <span>
        {expanded ? (
          <FormattedMessage
            id="common.post.text.expand-button.collapse"
            defaultMessage="Collapse"
          />
        ) : (
          <FormattedMessage
            id="common.post.text.expand-button.expand"
            defaultMessage="Expand"
          />
        )}
      </span>
    </button>
  );
};

export default TextPostExpandButton;
