/**
 * Next actions is an array of objects that contain the URL and messageId.
 * Those should be used as redirect by the supported pages, to create
 * a continuous flow of the user journey.
 *
 * It is passed as `next` query parameter to the page.
 */
export type TNextActions = Array<TNextAction>;

export type TNextAction = {
  url: string;
  messageId?: string;
};
