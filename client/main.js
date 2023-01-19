import { delayP, insertLast, tiger, xhrData, xhrPromise } from "./lib/index.js";

//* xhr
// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     console.log(res);
//     insertLast("body", JSON.stringify(res));
//   },
//   (err) => {
//     insertLast("body", "데이터 로딩에 실패했습니다");
//   }
// );

// xhrData.post(
//   "https://jsonplaceholder.typicode.com/users",
//   {
//     name: "hyeben",
//     username: "hyebeen",
//     email: "hyebeen@euid.dev",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "010-1123-0562",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   (res) => {
//     console.log(res);
//     insertLast("body", JSON.stringify(res));
//   },
//   (err) => {
//     insertLast("body", "데이터 로딩에 실패했습니다");
//   }
// );

//* promise
// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     insertLast(document.body, JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//*fetch
async function render() {
  await delayP(2000);
  let response = await tiger.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  // insertLast(document.body, JSON.stringify(response.data));
  console.log(response.data);
}

// render();
