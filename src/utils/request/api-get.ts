import buildQuery, { QueryParams } from '@/utils/request/build-query';
import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext, NextPageContext } from 'next';

export class HttpCodeError {
  response: Response;

  constructor(response: Response) {
    this.response = response;
  }
}

const apiGet = <T>(
  path: string,
  queryParams?: QueryParams,
  context?: NextPageContext | GetServerSidePropsContext,
): Promise<T> => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  if (context?.locale) {
    requestHeaders.set('Accept-Language', context?.locale);
  }

  let token: string;
  let uri: string;

  if (context) {
    token = <string>getCookie('token', { req: context.req, res: context.res });
    uri = process.env.NEXT_INTERNAL_API_URI + path + buildQuery(queryParams);
  } else {
    token = <string>getCookie('token');
    uri = process.env.NEXT_PUBLIC_API_URI + path + buildQuery(queryParams);
  }

  if (token) {
    requestHeaders.set('Authorization', 'Bearer ' + token);
  }

  return fetch(
    uri,
    {
      method: 'GET',
      headers: requestHeaders,
    },
  ).then((res) => {
    if (!res.ok) {
      throw new HttpCodeError(res);
    }

    return res.json();
  });
  //.catch(handleFetchError);
};

export default apiGet;
