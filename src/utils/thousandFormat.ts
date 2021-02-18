export function numberWithCommas(x: string | number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
