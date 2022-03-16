export function CommaGen(amount) {
  const rounded = Math.trunc(amount);
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return dollarUSLocale.format(rounded);
}
