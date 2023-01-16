import {
  attr,
  bindEvent,
  clearContents,
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
  insertLast,
  invisibleElement,
  memo,
  visibleElement,
} from "./lib/index.js";

//*----------------------------------------------------------------------------

// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
// const resetButton = getNode(".buttonGroup > button:nth-child(2)");

//? => 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);

//* 레코드 템플릿 뿌리기------------------------------------------------------------
let count = 0;
let total = 0;

const recordListWrapper = getNode(".recordListWrapper");

memo("@tbody", () => getNode(".recordListWrapper tbody"));
memo("@cube", () => getNode("#cube"));

function renderRecordListItem() {
  // let diceValue = Number(cube.dataset.dice);
  let diceValue = Number(attr(memo("@cube"), "data-dice"));

  const newRecordListItem = /* html */ `
  <tr>
    <td>${++count}</td>
    <td>${diceValue}</td>
    <td>${(total += diceValue)}</td>
  </tr>
  `;

  insertLast(memo("@tbody"), newRecordListItem);

  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

//* IIFE ----------------------------------------------------------

//* 주사위돌리기 함수
const handleRollingDice = (() => {
  //접근이 가능하게 하려고
  let isRolling = false;
  let stopAnimation;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 500);

      //recordButton.disabled = true;
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAnimation);

      //recordButton.disabled = false;
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  };
})();

//* 주사위 돌린 기록 함수
const handleRecord = () => {
  visibleElement(recordListWrapper);

  renderRecordListItem();
};

//* 주사위 초기화 함수
const handleReset = () => {
  invisibleElement(recordListWrapper);
  clearContents(memo("@tbody"));

  count = 0;
  total = 0;
};

//* 이벤트 리스너 ---------------------------------------------------------------
bindEvent(rollingDiceButton, "click", handleRollingDice);
bindEvent(recordButton, "click", handleRecord);
bindEvent(resetButton, "click", handleReset);
