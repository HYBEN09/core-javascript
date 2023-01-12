const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];
//*------------------------------------------------------------------------------

const navigation = getNode(".navigation");
const visualImage = getNode(".visual img");

//? 성능 차이로 makeArray 만들어 사용 ( 근소한 차이 )
// const list = getNodes(".navigation > li"); // NodeList(4) [li.is-active, li, li, li]

//*------------------------------------------------------------------------------

//* util function
//? 유사 배열을 배열로 만들어주는 함수
function makeArray(arrayLike) {
  return Array.from(arrayLike);
}

//*------------------------------------------------------------------------------

function handler(e) {
  e.preventDefault();

  //? closest : 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지,
  //? 자기 자신을 포함해 위쪽(부모 방향, 문서 루트까지)으로 문서 트리를 순회합니다
  let target = e.target.closest("li");

  if (!target) return;

  let list = makeArray(navigation.children);
  let index = attr(target, "data-index");

  //*==================================================================

  //? 네비게이션의 자식요소들을 유사배열로 불러온다음에 forEach가 안되는 상태여서
  //? makeArray 사용해서 진짜배열로 만들고 거기에 forEach써서 is-active를 제거해준것

  //? list를 배열로 만들기
  // Array.from(list);
  // let arr = [...list];
  // Array.prototype.slice.call(list)
  // let arr = makeArray(list);

  list.forEach((item) => removeClass(item, "is-active"));

  //*==================================================================

  //? data-index 값 가져오기
  // console.log(target.dataset.index);
  // console.log(attr(target, "data-index"));

  //*==================================================================

  //* data[0].alt

  //? 이미지 바꾸기
  // visualImage.src = `./assets/part01/visual${index}.jpg`
  // attr(visualImage, "src", `./assets/part01/visual${index}.jpg`);
  attr(visualImage, "src", `./assets/part01/${data[index - 1].src}`);

  //? alt값 바꾸기
  //? data-index가 1부터 시작하고, 배열은 0부터 시작하니까 -1을 하는 것.
  attr(visualImage, "alt", `data[index-1].alt`);

  //*==================================================================

  addClass(target, "is-active");
}
//*------------------------------------------------------------------------------

navigation.addEventListener("click", handler);
