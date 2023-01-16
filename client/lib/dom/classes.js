import { throwTypeError } from "../error/typeError.js";
import { isString } from "../utils/typeOf.js";
import { getNode } from "./getNode.js";

//addClass
export function addClass(node, className) {
  if (isString(node)) {
    node = getNode(node);
  }

  if (!isString(className)) {
    throwTypeError("addClass 함수의 두번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.add(className);
}

//*------------------------------------------------------------------------------

//removeClass
export function removeClass(node, className) {
  if (isString(node)) {
    node = getNode(node);
  }

  if (!className) {
    node.className = "";
    return;
  }

  if (!isString(className)) {
    throwTypeError("removeClass 함수의 두번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.remove(className);
}

//------------------------------------------------------------------------------

export function toggleClass(node, className) {
  if (isString(node)) {
    node = getNode(node);
  }

  if (!isString(className)) {
    throwTypeError("toggleClass 함수의 두번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.toggle(className);
}

//------------------------------------------------------------------------------

// addClass(".first", "hello");
// removeClass(".first", "hello");
// toggleClass(".first", "is-active");
