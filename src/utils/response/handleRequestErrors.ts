import { HttpCodeError } from '@/utils/request/apiGet';

/**\
 * @param e
 */
const handleRequestErrors = (e: any): any => {
  if (e instanceof HttpCodeError) {
    let redirectCode = 500;

    if ([400, 401, 404].includes(e.response.status)) {
      redirectCode = e.response.status;
    }

    return {
      redirect: {
        permanent: false,
        destination: `/${redirectCode}`,
      },
      props: {},
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: `/500`,
    },
    props: {},
  };
};

export default handleRequestErrors;
