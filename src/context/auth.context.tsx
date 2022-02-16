import React, {PropsWithChildren, useMemo, useState} from "react";
import Russian from "../../content/compiled-locales/ru.json";
import English from "../../content/compiled-locales/en.json";
import {IntlProvider} from "react-intl";
import {languages, LocaleContext} from "@/context/Intl.context";

export interface IAuthenticatedPlayer {
  uuid: string,
  nickname: string
}

export interface IAuthenticationContext {
  player?: IAuthenticatedPlayer
  setPlayer: (player: IAuthenticatedPlayer) => void
}

const AuthContext = React.createContext<IAuthenticationContext>({
  player: undefined,
  setPlayer: (player) => {}
});

export interface IAuthenticationProps {
  player?: IAuthenticatedPlayer
}

function AuthProviderWrapper(props: PropsWithChildren<IAuthenticationProps>) {
  const [player, setPlayer] = useState<IAuthenticatedPlayer | undefined>(props.player);

  return (<AuthContext.Provider value={ {
    player: player,
    setPlayer: setPlayer
  } }>
    { props.children }
  </AuthContext.Provider>)
}

export { AuthProviderWrapper, AuthContext };