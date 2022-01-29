import handleFetchError from './handleFetchError';

const apiGet = (path: string, post: any): Promise<any> => (
  fetch('http://127.0.0.1/v1' + path, {
    method: 'POST',
    /*headers: {
      'Authorization': 'Bearer ' + auth.token,
      'Content-Type': 'application/json'
    },*/
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .catch(handleFetchError)
);

export default apiGet;
