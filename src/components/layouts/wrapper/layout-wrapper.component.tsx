import { Locale, LocaleContext } from '@/context/Intl.context';
import { PropsWithChildren } from 'react';

const FontSupportedLocales: Locale[] = ['en'];

const LayoutWrapper = ({ children }: PropsWithChildren<{}>) => {
  return (
    <LocaleContext.Consumer>
      {(localeContext) => {
        return (
          <span
            className={
              FontSupportedLocales.includes(localeContext.locale)
                ? 'pixel-font'
                : 'sans-serif-font'
            }
          >
            {children}
          </span>
        );
      }}
    </LocaleContext.Consumer>
  );
};

export default LayoutWrapper;
