import React, { PropsWithChildren } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './introduction.module.scss';
import Link from 'next/link';
import CrossIcon from './icons/cross.png';
import { FormattedMessage } from 'react-intl';

interface FirstTimeNoticeProps {
  hide: () => void;
  learnMoreLink: string;
};

const Introduction = ({
  hide,
  learnMoreLink,
  children,
}: PropsWithChildren<FirstTimeNoticeProps>): JSX.Element | null => {
  return (
    <>
      <div className={injectClassNames('block', styles['first-time-notice'])}>
        <button
          className={styles['cross']}
          style={{ backgroundImage: `url(${CrossIcon.src})` }}
          onClick={hide}
        />
        {children}
      </div>
      <div className={styles['actions-wrapper']}>
        <Link href={learnMoreLink}>
          <button
            className={injectClassNames(styles['action'], styles['action-cta'])}
            onClick={hide}
          >
            <FormattedMessage
              id="introduction.first-time.learn-more"
              defaultMessage="Learn more!"
            />
          </button>
        </Link>
        <button className={styles['action']} onClick={hide}>
          <FormattedMessage
            id="introduction.first-time.ignore"
            defaultMessage="I know already"
          />
        </button>
      </div>
    </>
  );
};

export default Introduction;
