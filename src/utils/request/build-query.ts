export interface QueryParams {
  [key: string]: any;
}

const buildQuery = (queryParams?: QueryParams, originalUri?: string): string => {
  let queryString = '';

  if (!queryParams || Object.keys(queryParams).length === 0) {
    return queryString;
  }

  if (originalUri && originalUri.includes('?')) {
    queryString += '&';
  } else {
    queryString += '?';
  }

  queryString += Object.keys(queryParams)
    .map(function (key) {
      if (Array.isArray(queryParams[key])) {
        return queryParams[key]
          .map((value: string) => {
            return key + '=' + encodeURIComponent(value.toString());
          })
          .join('&');
      } else if (typeof queryParams[key] === 'object') {
        return key + '=' + encodeURIComponent(JSON.stringify(queryParams[key]));
      } else if (queryParams[key] === undefined || queryParams[key] === null) {
        return '';
      }

      return key + '=' + queryParams[key].toString();
    })
    .join('&');

  return queryString;
};

export default buildQuery;
