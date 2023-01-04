/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

/*  default parameter  */

function getRandomValue() {
  if (Math.random() > 0.5) {
    return 1;
  } else {
    return 0;
  }

  // return Math.random() > 0.5 ? 1 : 0
}

function calcPrice( // 함수 선언
  priceA, // 매개 변수
  priceB,
  priceC = getRandomValue(), // 매개 변수 기본 값
  priceD = getRandomValue()
) {
  // validation

  /*   if(!priceC){
    priceC = 0;
  }
  
  if(!priceD){
    priceD = 0;
  }
   */

  if (!priceA || !priceB) {
    throw new Error(
      "calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다."
    );
  }

  return priceA + priceB + priceC + priceD; // 함수 값 반환
}

let result = calcPrice(10, 30); // 함수 호출

console.log(result);

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 좋은 함수 작성 여건

// 1. 하나의 기능만을 수행해야 한다.  (관심사의 분리)
// 2. 읽었을때 바로 기능을 알 수 있게끔, (이름과 매개변수의 이름을 직관적이게 적어야 한다.)
// 3. 재사용성이 좋아야 한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16) {
  typeof pxValue === "string" && (pxValue = parseInt(pxValue, 10));

  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10)
  // }

  typeof base === "string" && (base = parseInt(base, 10));

  // if(typeof base === 'string'){
  //   base = parseInt(base,10)
  // }

  return `${pxValue / base}rem`;
}

/* 
  1. function name
  2. validation
  3. return value
  4. parameter, argument
  5. test  [Test Driven Development]
*/

// console.log();

console.assert(rem(20) === "1.25rem");
console.assert(rem("30px") === "1.875rem");
console.assert(rem("56px", 10) === "5.6rem");
