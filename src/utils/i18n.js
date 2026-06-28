import en from '../data/translations/en.json';

const translations = {
  en,
};

const locale = 'en';

function getValue(path) {
  return path.split('.').reduce((obj, key) => (obj && obj[key] != null ? obj[key] : undefined), translations[locale]);
}

export function t(path) {
  const value = getValue(path);
  return value == null ? path : value;
}

export function getLocale() {
  return locale;
}
