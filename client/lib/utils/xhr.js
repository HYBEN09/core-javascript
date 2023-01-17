//? readyState
//  0: uninitalized(초기화)
//  1: loading(로딩)
//  2: loaded(로딩 완료된)
//  3:interative(인터랙티브)
//  4:complete(완료)
//?-----------------------------------------------------------------

import { throwTypeError } from "../error/typeError.js";

//기본값 -> {}={}
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
  if (!url) {
    throwTypeError("서버와 요청할 url 인자는 반드시 필요합니다.");
  }

  const xhr = new XMLHttpRequest();

  //* 비동기 통신 오픈 ---------------------------------------------------
  xhr.open(method, url);

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
        console.log("통신 성공");

        // parse -> 문자를 객체화
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

//*---------------------------------------------------------------
// xhrData({
//   url: "https://jsonplaceholder.typicode.com/users",
//   onSuccess: (result) => {
//     console.log(result);
//   },
//   onFail: (error) => {
//     console.error(error);
//   },
// });

//*-------------------------------------------------------------------

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
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
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
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// });
