import React from 'react';
import {injectClassNames} from "@/utils/css";
import styles from './ConstructionPlaceholder.module.scss';
import {FormattedMessage} from "react-intl";

const ConstructionPlaceholder = (): JSX.Element => {
  return (
    <article className={ injectClassNames('block', styles['placeholder'], 'pixelated-images') }>
      <h2><FormattedMessage id="under-construction" defaultMessage="Under Construction" /></h2>
      <p><FormattedMessage id="under-construction-description" defaultMessage="We are building home for Zetter paintings" /></p>
      <p><FormattedMessage id="under-construction-description" defaultMessage="Consider jumping on our Discord server to be among the first who shares their paintings with the world" /></p>
      <p><FormattedMessage id="under-construction-description" defaultMessage="(and get a nice badge for your profile on Zetter Gallery)" /></p>
    </article>
  );
}

export default ConstructionPlaceholder;