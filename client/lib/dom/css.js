import { getNode, throwTypeError } from "../index.js";

function getStyle(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (!node || node.nodeType !== document.ELEMENT_NODE) {
    throwTypeError("첫 번째 매개변수인 node는 ELEMENT_NODE이여야 합니다.");
  }

  if (typeof prop !== "string") {
    throwTypeError("두 번째 매개변수인 prop의 타입은 string 이여야 합니다.");
  }

  if (!(prop in document.body.style)) {
    throwTypeError(
      "두 번째 매개변수인 prop는 CSS 표준 속성을 사용해야 합니다."
    );
  }

  // return getComputedStyle(node).getPropertyValue(prop);
  return getComputedStyle(node)[prop];
}

function setStyle(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (!value) {
    throwTypeError("세번째 인자는 필수 값 입니다");
  }

  if (!node || node.nodeType !== document.ELEMENT_NODE) {
    throwTypeError("첫 번째 매개변수인 node는 ELEMENT_NODE이여야 합니다.");
  }

  if (typeof prop !== "string") {
    throwTypeError("두 번째 매개변수인 prop의 타입은 string 이여야 합니다.");
  }

  if (!(prop in document.body.style)) {
    throwTypeError(
      "두 번째 매개변수인 prop는 CSS 표준 속성을 사용해야 합니다."
    );
  }

  if (typeof value === "number") {
    value = `${value}px`;
  }
  node.style[prop] = value;
}

export function css(node, prop, value) {
  return !value ? getStyle(node, prop) : setStyle(node, prop, value);
}

//---------------------------------------------------------------------
// getStyle(".first", "font-size"); // 32px

// setStyle(".first", "color", "blue");
// setStyle(".first", "fontSize", "150px");
// setStyle(".first", "font-size", 50);

// css(".first", "color");
// css(".first", "color", "green");

//*----------------------------------------------------------------
//?:   why? 폰트 사이즈는 150px로 커졌는데 왜 32px이 여전히 나오나요?
// setStyle(".first", "fontSize", "150px"); //150px
// getStyle(".first", "font-size"); //32px

//? : solution
// setTimeout(() => {
//   console.log(getStyle(".first", "font-size"));
// }, 1000); //150px
