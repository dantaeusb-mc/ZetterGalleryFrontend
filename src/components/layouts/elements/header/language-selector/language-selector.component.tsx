import React from 'react';
import styles from './language-selector.module.scss';
import GlobeIcon from '@assets/icons/globe.png';
import { languages, Locale, LocaleContext } from '@/context/intl.context';
import { injectClassNames } from '@/utils/css';
import { Icon, IconSize } from '@components/icon';
import { useIntl } from 'react-intl';

export default function LanguageSelector(): JSX.Element {
  const intl = useIntl();

  return (
    <LocaleContext.Consumer>
      {({ locale, changeLocale }) => {
        return (
          <div className={styles['language-wrapper']}>
            <label htmlFor="language-select">
              <i className={styles['globe-icon-wrapper']}>
                <Icon
                  title={intl.formatMessage({
                    id: 'language-selector.icon',
                    defaultMessage:
                      'Language selector globe icon'
                  })}
                  asset={GlobeIcon}
                  className={injectClassNames(
                    styles['globe-icon'],
                  )}
                  size={IconSize.Large}
                />
              </i>
              <div className={styles['language-overlay']}>
                {locale.toUpperCase()}
              </div>
              <select
                id="language-select"
                className={styles['language-select']}
                value={locale}
                onChange={(e) => {
                  changeLocale(e.target.value as Locale);
                }}
              >
                {Object.keys(languages).map((option, iterator) => {
                  return (
                    <option key={iterator} value={option}>
                      {languages[option as Locale]}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        );
      }}
    </LocaleContext.Consumer>
  );
}
