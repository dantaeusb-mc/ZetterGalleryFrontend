//import store from 'stores';
//import { showNotification } from 'stores/notifications';

const handleFetchError = (err: Error): Promise<any> => {
  console.error(err);
  return Promise.reject(err);
  /*// eslint-disable-next-line
    console.error(err);

  store.dispatch(
    showNotification({
      message: '⚠️ There was an error while fetching response.',
      isExpirable: true
    })
  );

  return Promise.reject();*/
};

export default handleFetchError;
