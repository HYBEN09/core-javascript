import { throwTypeError } from "../error/typeError.js";
import { isString } from "../utils/typeOf.js";

export function getNode(node) {
  if (!isString(node)) {
    throwTypeError("getNode의 함수의 인자는 문자 타입이어야 합니다.");
  }

  return document.querySelector(node);
}

export function getNodes(node) {
  if (!isString(node)) {
    throwTypeError("getNode의 함수의 인자는 문자 타입이어야 합니다.");
  }

  return document.querySelectorAll(node);
}
