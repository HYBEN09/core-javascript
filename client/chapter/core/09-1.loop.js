/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);

//* while 역순
// let i = frontEndDev.length;

// while (i >= 0) {
//   console.log(i, frontEndDev[i]);

//   i--;
// }

//* shift
// while (frontEndDev.length) {
//   console.log(frontEndDev.shift());
// }

//* 전개 연산자 spread operator
// let copyArray = [...frontEndDev];
let copyArray = frontEndDev.slice();

//* pop
while (copyArray.length) {
  console.log(copyArray.pop());
}

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환
