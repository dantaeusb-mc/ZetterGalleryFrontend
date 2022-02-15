export interface IQueryParams {
  [key: string]: any
}

const buildQuery = (queryParams?: IQueryParams): string => {
  let queryString = '';

  if (!queryParams || Object.keys(queryParams).length === 0) {
    return queryString;
  }

  queryString += '?';
  queryString += Object.keys(queryParams).map(function(key) {
    return key + '=' + queryParams[key].toString();
  }).join('&');

  return queryString;
}

export default buildQuery;