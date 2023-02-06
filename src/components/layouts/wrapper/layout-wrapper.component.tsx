import { Locale, LocaleContext } from '@/context/intl.context';
import { PropsWithChildren } from 'react';

const FontSupportedLocales: Locale[] = ['en'];

const LayoutWrapper = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  return (children);
};

export default LayoutWrapper;
