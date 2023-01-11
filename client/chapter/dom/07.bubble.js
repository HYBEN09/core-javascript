/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

// visual.addEventListener("click", () => {
//   console.log("%c visual", "color: blue");
// });

// news.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("%c news", "color: red");
// });

// desc.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("%c desc", "color: pink");
// });

//*---------------------------------------------------------

visual.addEventListener("click", function (e) {
  let elem = e.currentTarget;
  // console.log("target : ", e.target);
  // console.log("currentTarget : ", e.currentTarget);
  // console.log(this === e.currentTarget);
  // console.log(this);
  console.log("%c visual", "color: blue");
  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", (e) => {
  //   e.stopPropagation();
  css(".pop", "display", "none");
});

/* 캡처링 ----------------------------------------------------------------- */
