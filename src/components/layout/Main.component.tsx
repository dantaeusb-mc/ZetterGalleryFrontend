import {Locale, LocaleContext} from "@/context/Intl.context";
import {PropsWithChildren} from "react";

const FontSupportedLocales: Locale[] = ['en'];

const Main = ({ children }: PropsWithChildren<{ }>) => {
  return (
    <main>
      { children }
    </main>
  );
}

export default Main;