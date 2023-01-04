/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    return "Hello";
  },
};

let key = "standardName";

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

Object.prototype.nickName = "HYEBEN";

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// for (let key in javaScript) {
//   if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
//     console.log(key);
//   }
//}

let a = {};

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

/* -------------------------------------------------------------- */

const user = {
  name: "hyebeen",
  age: 32,
};

function hello(a, b, c) {
  console.log(a, b, c);
  console.log(this);
}

// hello.call(user, 1, 2, 3);

/* -------------------------------------------------------------- */

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

let tens = [10, 100, 1000, 10000];

tens.description = "10의 나열";

// for (const key in tens) {
//   let value = tens[key];

//   if (Object.prototype.hasOwnProperty.call(tens, key)) {
//     console.log(key + ":" + value);
//   }
// }
