//메모이제이션: 브라우저에게 호출을 많이 하지 않기 위해

export const memo = (() => {
  const cache = {};
  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.warn(`${key}값은 이미 캐시된 값이 존재합니다.`);
      return;
    }

    cache[key] = callback();

    // console.log(cache);
  };
})();

//클로저 안하면
// memo()("name", "tiger")

//* 예시
// memo("name", "tiger")
// cache = {
//     name: "tiger"
// }

//? 많은 양의 함수들을 넣으려고 => 확장
// memo("cube", () => document.querySelector("#cube")); //{cube: div#cube}
