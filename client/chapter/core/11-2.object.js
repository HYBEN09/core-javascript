/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */

// 복사(copy) vs. 참조(reference)

let message = "문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.";
let messenger = {
  name: "kakao talk",
  manufacture: "kakao",
};

let text = message;
let conversationTool = messenger;

text = "Hello!";
// conversationTool.name = "line";

//* 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

//* 객체 복사
// 1. for ~ in 문을 사용한 복사

let cloneObject = {};

for (let key in messenger) {
  cloneObject[key] = messenger[key];
}

// console.log(cloneObject);

// 2. Object.assign()을 사용한 복사

const copyObject = Object.assign({}, messenger);

// 3. 전개 연산자(...)를 사용한 복사

const spreadObject = { ...messenger };

// 4. 객체를 복사해주는 유틸 함수

const copydObject = (obj) => Object.assign({}, obj);

//----------------------------------------------------------------------------------

//* 객체 병합(합성)
const cssMapA = {
  color: "#4b004b",
  margin: "0 auto",
};

const cssMapB = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  padding: "0.4em 0.62em",
  color: "#3f9e97",
};

let combinedCssMap = { ...cssMapA, ...cssMapB };

//* 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  "min-height": "100vh",
  "max-width": {
    sm: "90%",
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

// let copyedContainerStyles = { ...containerStyles };  //? 얕은 복사

//* 1. 깊은 복사 유틸리티 함수

function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === "object") {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

function deepCloneObject(obj) {
  var clone = {};
  for (var key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      clone[key] = deepCloneObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

let copyedContainerStyles = cloneDeep(containerStyles);
// let copyedContainerStyles = deepCloneObject(containerStyles);

//--------------------------------------------------------------------------------
//* 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js

//!----------------------------------------------------------------------------

//* 값 복사
// - null
// - undefined
// - number
// - string
// - boolean

let repeating_count = 3;
let display_headline_content = "값 복사 vs 값 참조";
let is_toggle_menu = false;

//* 값 복사
// 불변(Immutable) 데이터의 경우 그 값이 복사된다.
// 숫자 값, 문자 값, 불리언 값, null, undefined

//* 값 복사
let b = display_headline_content;

console.log(b.replace("복사", "copy")); // 값 copy vs 값 참조

b = b.replace("복사", "copy");

//* 담긴 값이 달라진 것
console.log(b); // 값 copy vs 값 참조
console.log(display_headline_content); // 값 복사 vs 값 참조

let d = is_toggle_menu;

d; //false

d = !d; //true

d; //true
is_toggle_menu; //false

//-----------------------------------------------------------------
//* 검증!
// 변수에 할당된 값이 변경되었을 때
// 다른 변수에 담긴 값이 변경되지 않았단 것은
// 값이 복사되었음을 의미한다.

const myFamily = {
  size: 4,
  moto: "정직하게 살자",
  religious_belief: false,
  members: ["아버지", "어머니", "언니", "나"],
  getMembers: function () {
    return this.members;
  },
  addMembers: function (new_member) {
    this.members.push(new_member);
  },
};

const homeTasks = [
  "바닦 쓸고 닦기",
  "침구류 정리",
  "화장실 청소",
  "설거지",
  "분리 수거",
];

let h = homeTasks; //['바닦 쓸고 닦기', '침구류 정리', '화장실 청소', '설거지', '분리 수거']

h.pop(); // '분리 수거'

h; //['바닦 쓸고 닦기', '침구류 정리', '화장실 청소', '설거지']
homeTasks; //['바닦 쓸고 닦기', '침구류 정리', '화장실 청소', '설거지']

homeTasks.unshift("분리수거"); //5
homeTasks; //['분리수거', '바닦 쓸고 닦기', '침구류 정리', '화장실 청소', '설거지']
h; //['분리수거', '바닦 쓸고 닦기', '침구류 정리', '화장실 청소', '설거지']

h === homeTasks; //true

function copyArray(arr) {
  let copy = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    copy[i] = arr[i];
  }
  return copy;
}

let u = copyArray(homeTasks);
u; //['분리수거', '바닦 쓸고 닦기', '침구류 정리', '화장실 청소', '설거지']

u === homeTasks; //false

let j = myFamily;

j.size; //4
j.size = 6; //6

j; //{ size : 6, ... }
myFamily; //{ size : 6, ... }

let y = {};

for (let key in myFamily) {
  y[key] = myFamily[key];
}

console.log(y);

let q = copyArray([3, 6, 9]);
q; //[3, 6, 9]

q === [3, 6, 9]; //false

let yu = [3, 6, 9, 12];

let qu = copyArray(yu);

//*복사가 된것이므로 같지 않다
yu === qu; //false
