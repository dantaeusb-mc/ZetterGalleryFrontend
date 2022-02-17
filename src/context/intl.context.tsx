import React, { PropsWithChildren, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../../content/compiled-locales/en.json';
import Russian from '../../content/compiled-locales/ru.json';
import Polish from '../../content/compiled-locales/pl.json';

export const languages = {
  en: 'English',
  ru: 'Русский',
  pl: 'Polski',
};

export type Locale = keyof typeof languages;

export interface LocaleContextProps {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<LocaleContextProps>({
  locale: 'en',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLocale: () => {},
});

export interface IIntlProps {
  locale: keyof typeof languages;
}

function IntlProviderWrapper(props: PropsWithChildren<IIntlProps>) {
  const [locale, setLocale] = useState<keyof typeof languages>(props.locale);

  const messages = useMemo(() => {
    switch (locale) {
      case 'pl':
        return Polish;
      case 'ru':
        return Russian;
      case 'en':
      default:
        return English;
    }
  }, [locale]);

  return (
    <LocaleContext.Provider
      value={{
        locale: locale,
        changeLocale: setLocale,
      }}
    >
      <IntlProvider
        key={locale}
        locale={locale}
        messages={messages}
        defaultLocale="en"
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export { IntlProviderWrapper, LocaleContext };
