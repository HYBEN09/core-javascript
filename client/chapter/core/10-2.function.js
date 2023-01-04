/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

/*  =============================================================================================   */

// ...spread operator (...) => 전개 구문
// ( 전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를
//    0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여,
//    0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다. )

// rest parameter(...restArg) => 나머지 메개변수
//   (나머지 매개변수 구문을 사용하면 함수가 정해지지 않은 수의 매개변수를 배열로 받을 수 있습니다. )

//? forEach(item/target, index)          => undefined, 주어진 함수를 배열 요소 각각에 대해 실행.
//? map(current, index, arr, thisArg)    => 배열을 순환해서 새로운 배열을 만들때
//? reduce(acc,current,index,arr)        => 배열을 순환해서 다른 무언가를 만들때

/*  =============================================================================================   */
// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // console.log(arguments);

  let total = 0;

  let arr = Array.from(arguments); // static method
  // let arr = Array.prototype.slice.call(arguments)

  // arr.forEach(function(item,index){

  //   total += item;

  // });

  console.log();

  // for(let value of arguments){
  //   total += value;
  // }

  /*  for(let i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
*/

  return arr.reduce(function (acc, item) {
    return acc + item;
  });

  // return moneyA + moneyB + moneyC + moneyD;
};

console.log(calculateTotal(100, 500, 300, 150, 400, 150));

/*  =============================================================================================   */

//* 익명 함수 표현식
let anonymousFunction = function () {};

//* 유명(이름을 가진) 함수 표현식
let namedFunction = function name() {};

//* 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  if (typeof url === "string" && url.match(/http.+www/)) {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  "https://www.naver.com",
  function (url) {
    console.log(`${url} 해당페이지로 이동합니다.`);
  },

  function () {
    console.log("url 입력 정보가 올바르지 않습니다.");
  }
);

//*----------------------------------------------------------------------------------

//* 함수 선언문 vs. 함수 (표현)식

// 선언문
function aa() {}

//표현식
const bb = function () {};

// - 식 안에서 선언은 사용할 수 없음. 반면 함수 식은 식 내부에서도 사용 가능
// - 함수 선언은 반드시 이름이 필요하다. 반면, 함수 식은 이름이 없을 수도 있다.
// - 스코프 호이스트(scope hoist) 시, 처리되는 방식의 차이 (선언은 몸체가 실행영역으로 끌어올려짐 / 식은 할당되는 값은 그대로, 이름만 끌어올려지는 현상을 보임)

//*----------------------------------------------------------------------------------

//* 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

// 함수가 선언 됨과 동시에 실행되는 것을 말한다.
// JavaScript 함수는 그 자체로 '값'
// 함수 값을 즉시 실행 (이름 호출 없이)
// 침범을 막는다. (전역의 오염을 막는다.)
let IIFE;

//*----------------------------------------------------------------------------------
// 너 getNode 이거 나가

// getNode 받아

const MASTER = (function ($) {
  // parameter
  const KEY = "alcls@#@!$%";

  // 내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation : 외부의 접근을 차단
  // 일부 정보만 노출

  // console.log($(".first"));

  return {
    getKey: function () {
      return KEY;
    },
  };
})(getNode); // arguments

function getNode(node) {
  return document.querySelector(node);
}

console.log(MASTER.getKey());
//*----------------------------------------------------------------------------------

//? css(node: string, prop: string, value: number|strung) : string;

const css = (function () {
  function getStyle(node, prop) {
    // node의 값을 'h1'으로 받았을 경우
    if (typeof node === "string") {
      node = document.querySelector(node);
    }

    // node가 없거나 document.ELEMENT_NODE가 아닐 경우
    if (!node || node.nodeType !== document.ELEMENT_NODE) {
      throw new Error("첫 번째 매개변수인 node는 ELEMENT_NODE이여야 합니다.");
    }

    // prop의 값이 string이 아닐 경우
    if (typeof prop !== "string") {
      throw new Error("두 번째 매개변수인 prop의 타입은 string 이여야 합니다.");
    }

    // prop의 값이 sytle 속성이 아닐 경우
    if (!(prop in document.body.style)) {
      throw new Error(
        "두 번째 매개변수인 prop는 CSS 표준 속성을 사용해야 합니다."
      );
    }

    return getComputedStyle(node).getPropertyValue(prop);
  }

  function setStyle(node, prop, value) {
    if (typeof node === "string") {
      node = document.querySelector(node);
    }

    if (!node || node.nodeType !== document.ELEMENT_NODE) {
      throw new Error("첫 번째 매개변수인 node는 ELEMENT_NODE이여야 합니다.");
    }

    if (typeof prop !== "string") {
      throw new Error("두 번째 매개변수인 prop의 타입은 string 이여야 합니다.");
    }

    if (!(prop in document.body.style)) {
      throw new Error(
        "두 번째 매개변수인 prop는 CSS 표준 속성을 사용해야 합니다."
      );
    }

    if (typeof value === "number") {
      value = `${value}px`;
    }

    node.style.setProperty(prop, value);
    // node.style.prop = value;
  }

  function css(node, prop, value) {
    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }

  return css; //함수를 꺼내쓸 수 있다
})();

console.log(css("h1", "color", "blue"));
