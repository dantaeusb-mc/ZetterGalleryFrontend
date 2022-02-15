import buildQuery, { IQueryParams } from '@/utils/request/build-query';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { getCookie } from 'cookies-next';
import { HttpCodeError } from '@/utils/request/api-get';

const apiPost = <T>(
  path: string,
  body: any,
  queryParams?: IQueryParams,
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

  return fetch('http://127.0.0.1/v1' + path + buildQuery(queryParams), {
    method: 'POST',
    headers: requestHeaders,
    body: body,
  }).then((res) => {
    if (!res.ok) {
      throw new HttpCodeError(res);
    }

    return res.json();
  });
  //.catch(handleFetchError);
};

export default apiPost;
