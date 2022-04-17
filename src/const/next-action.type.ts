import { NextRouter } from 'next/router';
import { NextPageContext } from 'next';
import lodash from 'lodash';
import buildQuery from '@/utils/request/build-query';

export interface NextActionProps {
  path: string;
  description?: string;
}

export const parseNextAction = (
  context: NextRouter | NextPageContext,
): NextActionProps | undefined => {
  if (context.query.hasOwnProperty('then')) {
    const nextActions = context.query.then;

    console.log(nextActions);

    if (lodash.isArray(nextActions)) {
      const response = <NextActionProps>{
        path:
          nextActions[0] +
          buildQuery({ then: nextActions.slice(1).map(encodeURIComponent) }),
      };

      console.log(response);

      return response;
    } else {
      return <NextActionProps>{
        path: nextActions,
      };
    }
  }
};