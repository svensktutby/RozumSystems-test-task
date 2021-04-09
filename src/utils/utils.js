export const sortArrayAlphabetically = (arr, str) => {
  return [...arr].sort((a, b) => a[str].localeCompare(b[str]));
};

export const transformObjectToArrayByKeys = (obj, keys) => {
  return keys.reduce((acc, item) => [...acc, [item, obj[item]]], []);
};

export const formatBirthDay = (str) => {
  return str.split('-').reverse().join('.');
};
