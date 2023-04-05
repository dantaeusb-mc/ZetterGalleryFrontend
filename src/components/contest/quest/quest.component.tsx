import styles from './quest.module.scss';
import { injectClassNames } from '@/utils/css';
import { Badge } from '@/const/badges';
import { PropsWithChildren } from 'react';
import { BadgeIcon } from '@components/badge';

export interface QuestProps {
  badge: Badge;
  title: string;
  description: JSX.Element | string;
}

const Quest = ({
  badge,
  title,
  description,
  children,
}: PropsWithChildren<QuestProps>): JSX.Element => {
  return (
    <div className={styles['quest']}>
      <div className={injectClassNames(styles['container'], styles['reward'])}>
        <div className={styles['icon-wrapper']}>
          <BadgeIcon
            badge={badge}
            className={injectClassNames(styles['icon'])}
          />
        </div>
        <div className={styles['description-wrapper']}>
          <h3 className={styles['title']}>{title}</h3>
          {description}
        </div>
      </div>
      <div className={injectClassNames(styles['container'], styles['goal'])}>
        <div className={styles['icon-wrapper']}></div>
        <div className={styles['description-wrapper']}>{children}</div>
      </div>
    </div>
  );
};

export default Quest;
