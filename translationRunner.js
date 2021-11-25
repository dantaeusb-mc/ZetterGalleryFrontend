const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'content/locales',
  translationsDirectory: 'content/compiled-locales/',
  languages: ['ru']
});