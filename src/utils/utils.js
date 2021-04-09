export const sortArrayAlphabetically = (arr, str) => {
  return [...arr].sort((a, b) => a[str].localeCompare(b[str]));
};

export const transformObjectToArrayByKeys = (obj, keys) => {
  return keys.reduce((acc, item) => [...acc, [item, obj[item]]], []);
};

const padTime = (time) => time.toString().padStart(2, '0');

export const formatDate = (date) => {
  const dd = padTime(date.getDate());
  const mm = padTime(date.getMonth() + 1);
  const yy = padTime(date.getFullYear() % 100);

  return `${dd}.${mm}.${yy}`;
};

export const formatBirthDay = (str) => {
  return str.split('-').reverse().join('.');
};
