import handleFetchError from './handleFetchError';
import buildQuery, {IQueryParams} from "@/utils/request/buildQuery";
import {IMessageResponse} from "@interfaces/response/common.interface";

const apiGet = <T>(path: string, queryParams: IQueryParams): Promise<T> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  /*if (auth) {
    headers['Authorization'] = 'Bearer ' + auth.token;
  }*/

  return fetch('http://[::1]:3000/api/v1' + path + buildQuery(queryParams), {
    method: 'GET',
    headers: headers
  })
    .then(res => {
      if (!res.ok) {
        throw Promise.reject(res);
      }

      return res.json();
    })
    .catch(handleFetchError);
};

export default apiGet;
