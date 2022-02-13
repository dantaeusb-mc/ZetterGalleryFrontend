import React from 'react';
import { injectClassNames } from '@/utils/css';
import styles from './construction-placeholder.module.scss';
import { FormattedMessage } from 'react-intl';

const ConstructionPlaceholder = (): JSX.Element => {
  return (
    <article className={injectClassNames('block', styles['placeholder'])}>
      <h2></h2>
      <p>
        <FormattedMessage
          id="widgets.under-construction.description.why"
          defaultMessage="We are building home for Zetter paintings"
        />
      </p>
      <p>
        <FormattedMessage
          id="widgets.under-construction.description.dm"
          defaultMessage="If you know how to manage safe and inviting Discord communities, please DM me at dantaeusb#9879"
        />
      </p>
      {/** <p><FormattedMessage id="widgets.under-construction.description.discord" defaultMessage="Consider jumping on our Discord server to be among the first who shares their paintings with the world" /></p>
       <p><FormattedMessage id="widgets.under-construction.description." defaultMessage="(and get a nice badge for your profile on Zetter Gallery)" /></p> **/}
    </article>
  );
};

export default ConstructionPlaceholder;
