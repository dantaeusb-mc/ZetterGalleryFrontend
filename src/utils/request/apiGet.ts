import handleFetchError from './handleFetchError';
import buildQuery, {IQueryParams} from "@/utils/request/buildQuery";
import {IMessageResponse} from "@interfaces/response/common.interface";
import {getCookie} from "cookies-next";
import {NextPageContext} from "next";

export class HttpCodeError {
  response: Response

  constructor(response: Response) {
    this.response = response;
  }
}

const apiGet = <T>(path: string, queryParams?: IQueryParams, context?: NextPageContext): Promise<T> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  let token: string;

  if (context) {
    token = <string>getCookie('token', {req: context.req, res: context.res});
  } else {
    token = <string>getCookie('token');
  }

  if (token) {
    headers['Authorization'] = 'Bearer ' + token;
  }

  return fetch('http://[::1]:3000/api/v1' + path + buildQuery(queryParams), {
    method: 'GET',
    headers: headers
  })
    .then(res => {
      if (!res.ok) {
        throw new HttpCodeError(res);
      }

      return res.json();
    });
    //.catch(handleFetchError);
};

export default apiGet;
