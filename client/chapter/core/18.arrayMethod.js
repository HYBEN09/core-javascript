/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

//? Array.isArray

const arr = [10, 100, 1000, 10000];

console.log(typeof arr); //object
console.log(Array.isArray(arr)); //true

Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call(arr); // [object Array]

// slice(8, -1) , 8번쨰 부터 -1(제일 끝)까지.
//call이 없을 경우 Object.prototype.toString([]) => object를 반환
Object.prototype.toString.call(arr).slice(8, -1).toLowerCase(); // array

function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array"
  );
}

//=============================================================================

/* 요소 순환 -------------------------------------------------------------- */

//? forEach

const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user);

console.log(user); // {0: 10, 1: 100, 2: 1000, 3: 10000}

//* 예제 1
const span = document.querySelectorAll("span");

span.forEach((item) =>
  item.addEventListener("click", function () {
    // console.log(this);
  })
);

span.forEach((item) =>
  item.addEventListener("click", (e) => {
    // console.log((e.target.style.color = "blue"));
  })
);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift

//* reverse
arr.reverse();
// console.log(arr); //[10000, 1000, 100, 10]

//* splice ( 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경 )
//splice(시작 제거 [추가])
arr.splice(1, 0, 23, 5);
// console.log(arr); //[10000, 23, 5, 1000, 100, 10]

//* sort

// 반환값 < 0 : a가 b보다 앞에 있어야 한다
// 반환값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환값 > 0 : b가 a보다 앞에 있어야 한다

arr.sort((a, b) => a - b);
// console.log(arr); //[5, 10, 23, 100, 1000, 10000]

/*  새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
//* map

let todo = ["밥 먹기", "공부 하기", "영화 보기"];

let template = todo.map((todoList) => {
  return /*html*/ ` <li>${todoList}</li> `;
});

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

//----------------------------------------------------

let newArray = arr.map((item) => item * 2);

// console.log(newArray);  //[10, 20, 46, 200, 2000, 20000]

/* 요소 포함 여부 확인 ------------------------------------------------------ */

//* indexOf

arr.indexOf(5); // 0
arr.indexOf(1); // -1

// lastIndexOf
// includes
arr.includes(5); //true

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];

//* find
const find = users.find((item, index) => {
  return item.id < 5;
});

// console.log(find); //로운

//* findIndex

const findIndex = users.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex); //2

/* 요소 걸러내기 ----------------------------------------------------------- */

//* filter

const result = arr.filter((num) => {
  return num > 100;
});

// console.log(result);  //[1000, 10000]

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "개발자",
  },
  {
    name: "이로운",
    age: 23,
    job: "프론트앤드 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "디자이너",
  },
];

//* reduce
const age = friends.reduce((acc, cur) => acc + cur.age, 0);

const template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li> 할일 ${index + 1}  ${cur} </li>`;
}, "");

// console.log(age);
// console.log(template2);

//* reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = "성찬, 보경, 일범, 세민, 현진, 주현";

//* split
let nameArray = str.split(" ");

console.log(nameArray);

//* join
console.log(nameArray.join(" / ")); // 성찬, / 보경, / 일범, / 세민, / 현진, / 주현
