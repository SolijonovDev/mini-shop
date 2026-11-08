export const SeparateNumberFormat = n => {
  return n
    .toString()
    .split(/(?=(?:\d{3})+(?:\.|$))/g)
    .join(' ');
};