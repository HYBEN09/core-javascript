// console.log(window);
import {
  bindEvent,
  getNode as $,
  loadStorage,
  saveStorage,
} from "./lib/index.js";

const textField = $("#textField");
const deleteButton = $('input[value="삭제"]');

loadStorage("area").then((res) => {
  textField.value = res;
});

//* 이벤트 리스너 ---------------------------------------------

function inputHandler() {
  saveStorage("area", textField.value);
}

bindEvent(textField, "click", inputHandler);
