export const sortArrayAlphabetically = (arr, str) => {
  return [...arr].sort((a, b) => a[str].localeCompare(b[str]));
};
