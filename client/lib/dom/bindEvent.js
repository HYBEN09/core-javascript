//* util function

import { throwTypeError } from "../error/typeError.js";
import { isFunction, isString } from "../utils/typeOf.js";
import { getNode } from "./getNode.js";

export function bindEvent(node, type, handler) {
  if (isString(node)) {
    node = getNode(node);
  }

  if (!/mouseenter|click|mousemove|mouseleave|change/g.test(type)) {
    throwTypeError(
      "bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다."
    );
  }

  if (!isFunction(handler)) {
    throwTypeError("세번째 인자인 이벤트 핸들러는 함수형만 설정 가능합니다.");
  }

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

// const off = bindEvent(".first", "click", handler);

// bindEvent(".second", "click", off);
