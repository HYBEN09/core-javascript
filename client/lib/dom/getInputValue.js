import { throwTypeError } from "../error/index.js";
import { getNode } from "./getNode.js";

export function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT")
    throwTypeError("getInputValue 함수는 INPUT ELEMENT 만 허용됩니다");
  return node.value;
}
