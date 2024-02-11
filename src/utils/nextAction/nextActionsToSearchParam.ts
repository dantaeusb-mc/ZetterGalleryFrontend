import { TNextActions } from './nextAction.types';

export const nextActionsToSearchParam = (nextActions: TNextActions): string => {
  return encodeURI(JSON.stringify(nextActions));
};
