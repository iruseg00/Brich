export const SummaElements = (items, start = 0, end, key) => {
  let summa = 0;
  if (key) {
    for (let i = start; i < end; i++) summa += items[i][key];
  } else {
    for (let i = start; i < end; i++) summa += items[i];
  }
  return summa;
};

export const SummaElementsByIndex = (items, defaltValue = 8, key, ...args) => {
  let summa = 0;
  if (key) {
    for (let i = 0, k = args[i]; i < args.length; i++, k = args[i])
      k >= 0
        ? (summa += items[k][key])
        : (summa += defaltValue - items[Math.abs(k)][key]);
  } else {
    for (let i = 0, k = args[i]; i < args.length; i++, k = args[i]) {
      k >= 0 && k[0] != "-"
        ? (summa += items[k])
        : (summa += defaltValue - items[Math.abs(k)]);
    }
  }
  return summa;
};
