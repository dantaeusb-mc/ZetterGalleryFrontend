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
      }

      return key + '=' + queryParams[key].toString();
    })
    .join('&');

  return queryString;
};

export default buildQuery;
