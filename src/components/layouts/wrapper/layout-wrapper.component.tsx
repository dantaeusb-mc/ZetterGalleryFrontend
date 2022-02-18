import { Locale, LocaleContext } from '@/context/intl.context';
import { PropsWithChildren } from 'react';

const FontSupportedLocales: Locale[] = ['en'];

const LayoutWrapper = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
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
