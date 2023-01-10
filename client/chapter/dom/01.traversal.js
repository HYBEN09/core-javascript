/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

getNode(".first");

/* 문서 대상 확인 */
//* - matches

//? matches : 선택자 안에 class || id를 가지고 있는 대상이 있어?
console.log(getNode(".first").matches(".first")); //true

//* - contains

//? 선택자의 자식들 중에 해당 element 가 있어?
console.log(getNode("h1").contains(getNode(".first"))); //true

//-------------------------------------------------------------

let first = getNode(".first");

let clicked = false;
document.addEventListener("click", () => {
  if (first.classList.contains("first") && !clicked) {
    first.classList.add("is-active");
  } else {
    first.classList.remove("is-active");
  }

  clicked = !clicked;
});
