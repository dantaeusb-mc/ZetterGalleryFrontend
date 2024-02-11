import { TNextActions } from './nextAction.types';

/**
 * Convert the next query parameter to a list of NextActionProps objects
 * @param searchParam
 */
export const searchParamToNextActions = (
  searchParam?: string | Array<string>,
): TNextActions | undefined => {
  if (!searchParam) {
    return;
  }

  if (Array.isArray(searchParam)) {
    console.warn('next supposed to be JSON serialized string', searchParam);
    return;
  }

  try {
    let parsedNextActions = JSON.parse(decodeURI(searchParam));

    if (!Array.isArray(parsedNextActions)) {
      parsedNextActions = [parsedNextActions];
    }

    if (
      parsedNextActions.every(
        (nextAction: unknown) =>
          typeof nextAction === 'object' &&
          nextAction !== null &&
          nextAction.hasOwnProperty('url'),
      )
    ) {
      return parsedNextActions as TNextActions;
    } else {
      console.warn(
        'next supposed to be an array of NextActionProps',
        searchParam,
      );
      return;
    }
  } catch (e) {
    console.warn('next supposed to be JSON serialized string', searchParam);
    return;
  }
};
