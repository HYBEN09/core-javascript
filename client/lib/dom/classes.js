import { getNode, throwTypeError } from "../index.js";

//addClass
export function addClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (typeof className !== "string") {
    throwTypeError("addClass 함수의 두번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.add(className);
}

//*------------------------------------------------------------------------------

//removeClass
export function removeClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (!className) {
    node.className = "";
    return;
  }

  if (typeof className !== "string") {
    throwTypeError("removeClass 함수의 두번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.remove(className);
}

//------------------------------------------------------------------------------

export function toggleClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (typeof className !== "string") {
    throwTypeError("toggleClass 함수의 두번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.toggle(className);
}

//------------------------------------------------------------------------------

// addClass(".first", "hello");
// removeClass(".first", "hello");
// toggleClass(".first", "is-active");
