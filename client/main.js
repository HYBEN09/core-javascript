/* global gsap */

import {
  attr,
  bindEvent,
  changeColor,
  delayP,
  getNode as $,
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
  tiger,
} from "./lib/index.js";

const userCardContainer = $(".user-card-inner");

async function rendingUserList() {
  //로딩 창 생성
  renderSpinner(userCardContainer);

  try {
    //2초 뒤에 렌더링
    await delayP(2000);

    // 유저창이 렌더링되면 로딩창 지우기
    $(".loadingSpinner").remove();

    let response = await tiger.get("http://localhost:3000/users");

    let userData = response.data;

    //? 1나의 데이터만 받아왔을때.
    // insertLast(userCardContainer, createUserCard(userData));

    //? 모든 데이터를 넣었을때 전체 데이터 뿌리기
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data);
    });

    //* gsap =======================================================

    //usercard 색깔 바꾸기
    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.3,
      stagger: 0.2,
    });

    //*==============================================================
  } catch (err) {
    renderEmptyCard(userCardContainer);
  }
}
rendingUserList();

//* 이벤트 리스너 -------------------------------------------------------------------

//userCardContainer에 이벤트 위임을 줘서 클릭한 대상 중 에 가장 인접한 버튼만 찾아줘!
//대상 자체를 클릭하지 않는한 -> null
const handler = (e) => {
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");

  if (!deleteButton || !article) return; //null을 안뜨게 막고 -> button,article 만 허용

  //article의 data-index="user-1" 에서 1만 수집하기 위해서  //article.dataset.index
  let id = attr(article, "data-index").slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });
};

bindEvent(userCardContainer, "click", handler);
