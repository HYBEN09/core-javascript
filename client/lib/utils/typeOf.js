export function inNumericString(data) {
  data = Number(data);
  return !isNaN(data);
}
