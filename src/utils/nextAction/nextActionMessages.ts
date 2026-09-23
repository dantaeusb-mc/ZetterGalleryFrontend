import { defineMessages, MessageDescriptor } from 'react-intl';

export const nextActionMessages = defineMessages({
  updatePreferences: {
    id: 'player.preferences.callback.description',
    description:
      'User will need to got to Preferences page to update new preferences.',
    defaultMessage: 'Update your account preferences.',
  },
  crossAuthReturn: {
    id: 'auth.zetter.cross.callback.description',
    description:
      'User will need to return to this page after authorization to allow server to connect to their Zetter account.',
    defaultMessage: 'Allow Minecraft server to connect to your Zetter account.',
  },
});

export const getNextActionMessage = (messageId: string): MessageDescriptor =>
  Object.values(nextActionMessages).find(
    (message) => message.id === messageId,
  ) ?? { id: messageId };
