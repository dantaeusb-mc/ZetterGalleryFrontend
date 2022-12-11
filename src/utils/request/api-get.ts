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

  if (context) {
    token = <string>getCookie('token', { req: context.req, res: context.res });
  } else {
    token = <string>getCookie('token');
  }

  if (token) {
    requestHeaders.set('Authorization', 'Bearer ' + token);
  }

  return fetch(
    process.env.NEXT_PUBLIC_API_URI + path + buildQuery(queryParams),
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
