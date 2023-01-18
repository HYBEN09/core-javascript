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

render();
