import { throwTypeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";

//* JSDoc------------------------------------------------------------

/**
 * @function isElement
 * @param {HTMLElement} node
 * @return set disabled
 */

//*-------------------------------------------------------------------

export function disableElement(node) {
  if (!isElement(node)) {
    throwTypeError("disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }
  node.disabled = true;
}

export function enableElement(node) {
  if (!isElement(node)) {
    throwTypeError("enableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }

  node.disabled = false;
}

//*---------------------------------------------------------------------

export function visibleElement(node) {
  if (!isElement(node)) {
    throw new TypeError(
      "visibleElement함수의 해당 element는 ELEMENT_NODE가 아닙니다."
    );
  }
  node.hidden = false;
}

export function invisibleElement(node) {
  if (!isElement(node)) {
    throw new TypeError(
      "invisibleElement함수의 해당 element는 ELEMENT_NODE가 아닙니다."
    );
  }
  node.hidden = true;
}
