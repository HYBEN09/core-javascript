import {
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  throwTypeError,
  inNumericString,
  showAlert,
  clearContents,
  copy,
  addClass,
  removeClass,
} from "./lib/index.js";
import { jujeobData } from "./data/data.js";

//*-----------------------------------------------------------

const submit = getNode("#submit");
const resultArea = getNode(".result");

//* 함수 ------------------------------------------------------

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue("#nameField").trim();
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    // console.log("이름을 입력해 주세요!!");
    showAlert(".alert-error", "이름을 입력해 주세요!", 1000);

    //* GSAP =======================================
    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: "x", repeat: 20 }
    );

    //*=======================================

    // addClass(resultArea, "shake");
    // setTimeout(() => {
    //   removeClass(resultArea, "shake");
    // }, 1000);

    //*=======================================
    return;
  }

  if (inNumericString(name)) {
    // console.log("문자로 입력해주세요.");
    showAlert(".alert-error", "문자로 입력해주세요!!", 1000);
    return;
  }

  clearContents(resultArea);

  insertLast(resultArea, pick);
}

// 클립보드에 복사
function clickCopyHandler() {
  let text = resultArea.textContent;

  // copy가 완벽히 이루어졌다면 뒤의 함수를 실행해줘
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드에 복사가 완료되었습니다.", 2000);
  });
}

//*-----------------------------------------------------------

submit.addEventListener("click", clickSubmitHandler);
resultArea.addEventListener("click", clickCopyHandler);
