//? util function

import { getNode, throwTypeError } from "../index.js";

//* get 함수 만들기
function getAttr(element, attrName) {
  if (typeof element === "string") {
    element = getNode(element);
  }

  return element.getAttribute(attrName);
}

//* set 함수 만들기
function setAttr(element, attrName, value) {
  if (typeof element === "string") {
    element = getNode(element);
  }

  if (typeof attrName !== "string") {
    throw new throwTypeError(
      "setAttr 함수의 2번째 인자의 타입은 문자 타입 이어야 합니다"
    );
  }

  if (attrName.includes("data")) {
    let rest = attrName.slice(5); // "data-value".slice(5) => "value"

    //? 계산된값을 받아와서 읽을때 [] 써야 한다.
    element.dataset[rest] = value;
  }

  if (!value) {
    throw new throwTypeError("value 인자 유형은 값이 존재해야 합니다.");
  }

  return element.setAttribute(attrName, value);
}

// setAttr(".first", "data-value", "hello");

//* common 함수 만들기
export function attr(element, attrName, value) {
  if (!value) {
    return getAttr(element, attrName);
  } else {
    setAttr(element, attrName, value);
  }
}
