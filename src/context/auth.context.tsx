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

export interface RefreshToken {
  token: string;
  issued: string;
  notAfter: string;
}

export interface AuthContextProps {
  player?: AuthenticatedPlayer;
  setPlayer: (player: AuthenticatedPlayer) => void;
  refreshToken?: RefreshToken;
  setRefreshToken: (token: RefreshToken) => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
  player: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPlayer: (player) => {},
  refreshToken: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRefreshToken: (token) => {},
});

export interface AuthProviderProps {
  player?: AuthenticatedPlayer;
}

const PLAYER_STORAGE_KEY = 'player';
const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token';

const AuthProviderWrapper = (props: PropsWithChildren<AuthProviderProps>) => {
  const route = useRouter();
  const [player, setPlayer] = useState<AuthenticatedPlayer | undefined>(
    props.player,
  );

  const [refreshToken, setRefreshToken] = useState<RefreshToken | undefined>();
  let cookieToken = getCookie('token');

  const fetchPlayerProps = useCallback(async () => {
    const response = await apiGet<PlayerResponseDto>('/players/me');
    setPlayer(response);
  }, []);

  useEffect(() => {
    const playerInfoRaw = localStorage.getItem(PLAYER_STORAGE_KEY);
    const refreshTokenInfoRaw = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

    if (playerInfoRaw) {
      try {
        const savedPlayerInfo: AuthenticatedPlayer = JSON.parse(playerInfoRaw);
        setPlayer(savedPlayerInfo);
        return;
      } catch (e) {
        localStorage.removeItem(PLAYER_STORAGE_KEY);
        console.error('Unable to parse player from local storage', e);
      }
    }

    if (refreshTokenInfoRaw) {
      try {
        const refreshToken: RefreshToken = JSON.parse(refreshTokenInfoRaw);
        setRefreshToken(refreshToken);
        return;
      } catch (e) {
        localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
        console.error('Unable to parse refresh token from local storage', e);
      }
    }
  }, []);

  useEffect(() => {
    cookieToken = getCookie('token');

    if (player) {
      if (!cookieToken) {
        // refresh or drop?
        setPlayer(undefined);
        return;
      }
    } else {
      if (cookieToken) {
        fetchPlayerProps();
      }
    }
  }, [route]);

  useEffect(() => {
    if (player !== undefined) {
      localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(player));
    } else {
      localStorage.removeItem(PLAYER_STORAGE_KEY);
    }
  }, [player]);

  useEffect(() => {
    if (refreshToken !== undefined) {
      localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, JSON.stringify(refreshToken));
    } else {
      localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
    }
  }, [refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        player: player,
        setPlayer: setPlayer,
        refreshToken: refreshToken,
        setRefreshToken: setRefreshToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProviderWrapper;
