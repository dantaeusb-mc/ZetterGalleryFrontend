import React, { PropsWithChildren, useState } from 'react';

export interface IAuthenticatedPlayer {
  uuid: string;
  nickname: string;
}

export interface IAuthenticationContext {
  player?: IAuthenticatedPlayer;
  setPlayer: (player: IAuthenticatedPlayer) => void;
}

const AuthContext = React.createContext<IAuthenticationContext>({
  player: undefined,
  setPlayer: (player) => {},
});

export interface IAuthenticationProps {
  player?: IAuthenticatedPlayer;
}

function AuthProviderWrapper(props: PropsWithChildren<IAuthenticationProps>) {
  const [player, setPlayer] = useState<IAuthenticatedPlayer | undefined>(
    props.player,
  );

  return (
    <AuthContext.Provider
      value={{
        player: player,
        setPlayer: setPlayer,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
