// ? readyState
//  0: uninitalized(초기화)
//  1: loading(로딩)
//  2: loaded(로딩 완료된)
//  3:interative(인터랙티브)
//  4:complete(완료)
//?-----------------------------------------------------------------

import { throwTypeError } from "../error/typeError.js";
import { insertLast } from "../index.js";

//* XHR -----------------------------------------------------------------------

//기본값 -> { } = { }
export function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    //? 동일 출처 정책 -> 서버에 접근 할수있는
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  // if (!url) {
  //   throwTypeError("서버와 요청할 url 인자는 반드시 필요합니다.");
  // }

  const xhr = new XMLHttpRequest();

  //* 비동기 통신 오픈 ---------------------------------------------------
  xhr.open(method, url);

  //? Header 를 순환
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  //readystate 가 change 됬을때 발생하는 이벤트
  xhr.addEventListener("readystatechange", () => {
    //* 객체 구조 분해 할당
    const { status, readyState, response, error } = xhr;

    // 완료된 상태만 통신을 확인 하기 위해
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        // parse -> 문자를 객체화
        console.log("통신성공");
        onSuccess(JSON.parse(response));
      }
    } else {
      // console.error("통신 실패");
      onFail?.(error);
    }
  });

  //* 서버에 요청 --------------------------------------------------------
  xhr.send(body ?? JSON.stringify(body));
}

//? 적용예시 ---------------------------------------------------------------
// xhrData({
//   url: "https://jsonplaceholder.typicode.com/users/1",
//   onSuccess: (result) => {
//     console.log(result);
//   },
//   onFail: (error) => {
//     console.error(error);
//   },
// });

//*-------------------------------------------------------------------
// get 이라는 key에다가 함수를 value로 넣어 주는 것.
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

//* 적용 예시 -----------------------------------------------------

// xhrData.delete(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     console.log(res);
//     insertLast("body", JSON.stringify(res));
//   },
//   (err) => {
//     insertLast("body", "데이터 로딩에 실패했습니다");
//   }
// );

// xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
//   name: "hyeben",
//   username: "hyebeen",
//   email: "hyebeen@euid.dev",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "010-1123-0562",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// });

//* Promise API ------------------------------------------------------------------
const defaultOptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: null,
};

export const xhrPromise = (userOptions = {}) => {
  // 객체 합성(믹스인)
  // 구조 분해 할당
  const { url, method, body, headers } = Object.assign(
    {},
    defaultOptions,
    userOptions
  );

  // validation
  if (!url) {
    throwTypeError("서버와 요청할 url 인자는 반드시 필요합니다.");
  }

  // create
  const xhr = new XMLHttpRequest();

  // open
  xhr.open(method, url);

  // send
  xhr.send(body ? JSON.stringify(body) : null);

  // return promise object
  return new Promise((resolve, reject) => {
    // listen
    xhr.addEventListener("readystatechange", () => {
      const { status, readyState, response, error } = xhr;
      if (status >= 200 || status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject(error);
      }
    });
  });
};

//* 적용 예시 =====================================================
// xhrPromise({
//   url: "https://jsonplaceholder.typicode.com/users/3",
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//*==============================================================

// READ
xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

// CREATE
xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "POST",
  });
};

// UPDATE
xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "PUT",
  });
};

// DELETE
xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: "DELETE",
  });
};

//* xhrPromise 적용예시 =================================================================
// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
