import { getNode } from "../dom/index.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

//* callback 지옥 ----------------------------------------------
// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     first.style.transform = "rotate(360deg)";
//     delay(() => {
//       first.style.top = "0px";
//     });
//   });
// });

//*----------------------------------------------------------------------------------

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공했습니다!",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

export function delayP(options = {}) {
  // 객체 복사 -> 참조 할 경우 defaultOptions값이 바뀔 위험이있어서 복사
  let config = { ...defaultOptions };
  //? let config = Object.assign({}, defaultOptions);

  if (isNumber(options)) {
    config.timeout = options;
  }

  //객체 합성 mixin
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, timeout, data, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

// delayP(3000).then((res) => {
//   console.log(res);
// });

//* callback 지옥 -> 가독성이 좋아짐 --------------------------------------------------------------
// delayP()
//   .then(() => {
//     first.style.top = "-100px";
//     return delayP();
//   })
//   .then(() => {
//     first.style.transform = "rotate(360deg)";
//     return delayP();
//   })
//   .then(() => {
//     first.style.top = "0px";
//   });

//*---------------------------------------------------------------------------------------
delayP()
  .then((res) => {
    // console.log(res); //'성공!'
    return delayP(); // return을 꼭 해줘야함 -> 안하면 console.log(res): undefined
  })
  .then((res) => {
    // console.log(res);
    return delayP();
  })
  .then((res) => {
    // console.log(res);
  });

// delayP().then((res) => console.log(res).catch((err) => console.log(err)));

//*-------------------------------------------------------------------------------------------

//* ✅ async await
// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await :  1. promise가 반환하는 result를 가져오기.
//          2. 코드 실행 흐름 제어

async function delayA() {
  return "완료!";
}

//? async는 promise를 봔환
// console.log(delayA()); // Promise{<fulfilled>: '완료!'}

//? promise => then을 사용하여 값을 호출
// let result = delayA().then((res) => console.log(res));

//? await
let result = await delayA(); //완료!

// console.log(result);

//* 적용 예시 ==================================================================

async function 라면끓이기() {
  try {
    await delayP();
    first.style.top = "-100px";

    await delayP();
    first.style.transform = "rotate(360deg)";

    await delayP();
    first.style.top = "0px";

    await delayP();
    console.log("계란넣기");

    // throw new Error('계란 껍질이 들어가버렸다!');
    await delayP();
    console.log("그릇에담기");
  } catch (err) {
    console.log(err);
  }
}

// 라면끓이기();
