export const capitalizeFirst = (str) => {
  const new_str = String(str);
  return new_str.charAt(0).toUpperCase() + new_str.slice(1).toLowerCase();
};
