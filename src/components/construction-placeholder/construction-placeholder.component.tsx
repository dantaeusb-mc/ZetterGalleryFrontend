import React from 'react';
import { injectClassNames } from '@/utils/css';
import styles from './construction-placeholder.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { SliceButton } from '@components/sliceButton';

const ConstructionPlaceholder = (): JSX.Element => {
  const intl = useIntl();

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
          id="widgets.under-construction.description.updates"
          defaultMessage="If you'd like to know about updates"
        />
        <SliceButton
          title={intl.formatMessage({
            id: 'widgets.under-construction.description.discord-button',
            defaultMessage: 'Join our Discord server',
          })}
          action={() => {
            return;
          }}
        >
          <FormattedMessage
            id="widgets.under-construction.description.discord-button.join"
            defaultMessage="Join our"
          />
          <br />
          <FormattedMessage
            id="widgets.under-construction.description.discord-button.server"
            defaultMessage="Discord server"
          />
        </SliceButton>
      </p>
      {/** <p><FormattedMessage id="widgets.under-construction.description.discord" defaultMessage="Consider jumping on our Discord server to be among the first who shares their paintings with the world" /></p>
       <p><FormattedMessage id="widgets.under-construction.description." defaultMessage="(and get a nice badge for your profile on Zetter Gallery)" /></p> **/}
    </article>
  );
};

export default ConstructionPlaceholder;
