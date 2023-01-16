import { bindEvent, diceAnimation, getNode } from "./lib/index.js";

//* [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

//*----------------------------------------------------------------------------
// 주사위 굴리기 버튼 잡기
const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
const recordButton = getNode(".buttonGroup > button:nth-child(2)");

//* IIFE ----------------------------------------------------------

const handlerRollingDice = () => {
  //접근이 가능하게 하려고
  let isRolling = false;
  let stopAnimation;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 500);
    } else {
      clearInterval(stopAnimation);
    }

    isRolling = !isRolling;
  };
};

//* 이벤트 리스너 ---------------------------------------------------------------
rollingDiceButton.addEventListener("click", handlerRollingDice());
// bindEvent(rollingDiceButton, "click", handlerRollingDice);
