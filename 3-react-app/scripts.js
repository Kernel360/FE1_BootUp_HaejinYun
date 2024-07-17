export const MAX_VALUE = 16;
export const COLOR_ARRAY = ["bg-red", "bg-blue", "bg-green"];
export const FONT_ARRAY = [
  "text-bold",
  "text-italic",
  "text-strike",
  "text-underline",
];

const isEmpty = (value) => value === "";

export const clickSetBackgroundColor = (e) => {
  const $colorInput = document.querySelector("#id-input"); //컬러 input

  if (isEmpty($colorInput.value)) {
    return;
  }

  const target = e.target;

  document.getElementById($colorInput.value).classList.remove(...COLOR_ARRAY);
  document.getElementById($colorInput.value).classList.add(target.value);
};

export const clickSetTextStyle = (e) => {
  const $classInput = document.querySelector("#class-input"); //텍스트 스타일 input

  if (isEmpty($classInput.value)) {
    return;
  }

  const target = e.target;
  const allNumber = document.getElementsByClassName($classInput.value);

  Array.from(allNumber).forEach((item) => {
    item.classList.remove(...FONT_ARRAY);
    item.classList.add(target.value);
  });
};

export const clickReset = () => {
  const $selectorInput = document.querySelector("#selector-input"); //selector input

  if (isEmpty($selectorInput.value)) {
    return;
  }

  const allSelector = document.querySelectorAll($selectorInput.value);

  allSelector.forEach((item) => {
    item.classList.remove(...COLOR_ARRAY);
    item.classList.remove(...FONT_ARRAY);
  });
};
