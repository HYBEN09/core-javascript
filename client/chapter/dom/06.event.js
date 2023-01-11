/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// * addEventListener
// * removeEventListener

const first = getNode(".first");
const second = getNode(".second");
const ground = getNode(".ground");
const ball = getNode(".ball");

function handler() {
  console.log("hit!");

  //getNode(".second").style.display = "none";
  //css(".second", "display", "none");
}

first.addEventListener("click", handler);

//*------------------------------------------------------------

ground.addEventListener("click", (e) => {
  console.log(e.offsetX, e.offsetY);

  //ball.offsetWidth,offsetHeight / 2 => 공이 마우스 정가운대에 위치하게 해줌
  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${
    e.offsetY - ball.offsetHeight / 2
  }px)`;
});

//*------------------------------------------------------------
function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

//*--------------------------------------------------------------------
// resize
ground.addEventListener(
  "mousemove",
  throttle((e) => {
    console.log(e.offsetX, e.offsetY);

    let posX = e.offsetX;
    let posY = e.offsetY;

    const emotion = /* html */ `<div class="emotion" style="left:${posX}px;top:${posY}px">🦁</div>`;

    insertLast(ground, emotion);
  }, 500)
);

// second.addEventListener("click", () => {
//   first.removeEventListener("click", handler);
// });
