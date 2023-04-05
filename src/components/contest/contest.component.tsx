import styles from './contest.module.scss';
import { injectClassNames } from '@/utils/css';
import { Badge } from '@/const/badges';
import { BadgeIcon } from '@components/badge';

export interface ContestProps {
  badge: Badge;
  title: string;
  type: string;
}

const Contest = ({ badge, title, type }: ContestProps): JSX.Element => {
  return (
    <div className={styles['container']}>
      <div className={styles['icon-wrapper']}>
        <BadgeIcon badge={badge} className={injectClassNames(
          styles['icon'],
          styles[badge.tier],
        )} />
      </div>
      <div className={styles['description-wrapper']}>
        <h2 className={injectClassNames(
          styles['title'],
          styles[badge.tier]
        )}>
          {title}
        </h2>
        <p className={injectClassNames(styles['type'])}>{type}</p>
      </div>
    </div>
  );
};

export default Contest;
