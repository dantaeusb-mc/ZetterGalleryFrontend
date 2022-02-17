export interface IQueryParams {
  [key: string]: any;
}

const buildQuery = (queryParams?: IQueryParams): string => {
  let queryString = '';

  if (!queryParams || Object.keys(queryParams).length === 0) {
    return queryString;
  }

  queryString += '?';
  queryString += Object.keys(queryParams)
    .map(function (key) {
      if (Array.isArray(queryParams[key])) {
        return queryParams[key]
          .map((value: string) => {
            return key + '=' + value.toString();
          })
          .join('&');
      }

      return key + '=' + queryParams[key].toString();
    })
    .join('&');

  return queryString;
};

export default buildQuery;
