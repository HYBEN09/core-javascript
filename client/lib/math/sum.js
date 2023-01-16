import { throwTypeError } from "../index.js";

export function sum(valueA, valueB) {
  if (typeof valueA !== "number" || typeof valueB !== "number") {
    throwTypeError("value 값은 숫자여야 합니다.");
  }

  return valueA + valueB;
}
