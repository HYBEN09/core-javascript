import { throwTypeError } from "../error/typeError.js";

export const getRandom = (n) => {
  if (typeof n !== "number")
    throwTypeError("getRandom 함수의 매개변수는 숫자 타입이어야 합니다.");
  if (!n) throwTypeError("getRandom 함수는 1개이상의 매개변수를 받아야합니다.");
  return Math.round(Math.random() * n);
};
