import {injectClassNames} from "@/utils/css";
import styles from "@components/constructionPlaceholder/ConstructionPlaceholder.module.scss";
import {FormattedMessage, useIntl} from "react-intl";
import React, {ReactNode} from "react";

interface ErrorMessageProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

const ErrorMessage = (props: ErrorMessageProps): JSX.Element => {
  return (
    <article className={injectClassNames('block', styles['placeholder'], 'pixelated-images')}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
}

export default ErrorMessage;