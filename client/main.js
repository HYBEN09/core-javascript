import {
  bindEvent,
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
  invisibleElement,
  visibleElement,
} from "./lib/index.js";

//* [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

//* [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

//*----------------------------------------------------------------------------

// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
// const resetButton = getNode(".buttonGroup > button:nth-child(2)");

//? => 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);

const recordListWrapper = getNode(".recordListWrapper");
//* IIFE ----------------------------------------------------------

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

const handleRecord = () => {
  visibleElement(recordListWrapper);
};

const handleReset = () => {
  invisibleElement(recordListWrapper);
};

//* 이벤트 리스너 ---------------------------------------------------------------
rollingDiceButton.addEventListener("click", handleRollingDice);
// bindEvent(rollingDiceButton, "click", handleRollingDice);
bindEvent(recordButton, "click", handleRecord);
bindEvent(resetButton, "click", handleReset);
