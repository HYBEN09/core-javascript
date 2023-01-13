import {
  bindEvent,
  getNode,
  insertLast,
  sum,
  getInputValue,
  clearContents,
} from "./lib/index.js";

const firstNum = getNode("#firstNumber");
const secondNum = getNode("#secondNumber");
const doneButton = getNode("#done");
const result = getNode(".result");

//* 함수 ----------------------------------------------------------

function handler(e) {
  e.preventDefault();

  let firstValue = Number(getInputValue(firstNum));
  let secondValue = Number(getInputValue(secondNum));

  const total = sum(firstValue, secondValue);
  console.log(total);

  //? 기존에 있던 "-" 지워주기
  // getNode(".result").textContent = "";
  clearContents(result);

  insertLast(result, total);
}

//실시간으로 숫자 바꾸기
function inputHandler() {
  let firstValue = Number(getInputValue(firstNum));
  let secondValue = Number(getInputValue(secondNum));

  const total = sum(firstValue, secondValue);

  clearContents(result);

  insertLast(result, total);
}

//* 이벤트 리스너 ----------------------------------------------------------

// button.addEventListener("click", handler);
bindEvent(doneButton, "click", handler);

// firstNum.addEventListener("change", inputHandler);
bindEvent(firstNum, "change", inputHandler);
