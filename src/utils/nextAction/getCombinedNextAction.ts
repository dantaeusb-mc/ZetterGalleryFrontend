import { TNextAction, TNextActions } from './nextAction.types';
import buildQuery from '@/utils/request/build-query';
import { nextActionsToSearchParam } from '@/utils/nextAction/nextActionsToSearchParam';

/**
 * Turns a list of next actions into a single next action,
 * with the next actions serialized into the next query parameter.
 *
 * That parameter will be deserialized by the searchParamToNextActions function
 * to work with a list of actions again.
 * @param nextActions
 */
export const getCombinedNextAction = (
  nextActions?: TNextActions,
): TNextAction | undefined => {
  if (!nextActions || nextActions.length === 0) {
    return;
  }

  const currentAction = nextActions[0];
  const nextActionsLeft = nextActions.slice(1);

  if (nextActionsLeft.length > 0) {
    return {
      url:
        currentAction.url +
        buildQuery({ next: nextActionsToSearchParam(nextActionsLeft) }),
    };
  }

  return currentAction;
};
