import handleFetchError from './handleFetchError';
import {AuthValue} from '../../contexts/auth';

const apiGet = <T>(path: string, auth: AuthValue|null = null): Promise<T> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (auth) {
    headers['Authorization'] = 'Bearer ' + auth.token;
  }

  return fetch('http:[::1]:3000/api/v1/' + path, {
    method: 'GET',
    headers: headers
  })
    .then(res => res.json())
    .catch(handleFetchError);
};

export default apiGet;
