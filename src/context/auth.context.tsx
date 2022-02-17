import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { getCookie } from 'cookies-next';
import { apiGet } from '@/utils/request';
import { PlayerResponseDto } from '@/dto/response/player/player.dto';
import { useRouter } from 'next/router';

export interface AuthenticatedPlayer {
  uuid: string;
  nickname: string;
}

export interface AuthContextProps {
  player?: AuthenticatedPlayer;
  setPlayer: (player: AuthenticatedPlayer) => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
  player: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPlayer: (player) => {},
});

export interface AuthProviderProps {
  player?: AuthenticatedPlayer;
}

const PLAYER_STORAGE_KEY = 'player';

const AuthProviderWrapper = (props: PropsWithChildren<AuthProviderProps>) => {
  const route = useRouter();
  const [player, setPlayer] = useState<AuthenticatedPlayer | undefined>(
    props.player,
  );

  let cookieToken = getCookie('token');

  const fetchPlayerProps = useCallback(async () => {
    const response = await apiGet<PlayerResponseDto>('/players/me');
    setPlayer(response);
  }, []);

  useEffect(() => {
    const playerInfoRaw = localStorage.getItem(PLAYER_STORAGE_KEY);

    if (playerInfoRaw) {
      try {
        const savedPlayerInfo: AuthenticatedPlayer = JSON.parse(playerInfoRaw);
        setPlayer(savedPlayerInfo);
        return;
      } catch (e) {
        console.error('Unable to parse player from local storage', e);
      }
    }
  }, []);

  useEffect(() => {
    cookieToken = getCookie('token');

    if (!!player && !!cookieToken) {
      return;
    }

    if (cookieToken) {
      fetchPlayerProps();
    } else {
      setPlayer(undefined);
    }
  }, [route]);

  useEffect(() => {
    if (player !== undefined) {
      localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(player));
    } else {
      localStorage.removeItem(PLAYER_STORAGE_KEY);
    }
  }, [player]);

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
};

export default AuthProviderWrapper;
