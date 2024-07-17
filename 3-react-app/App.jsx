import React, { useEffect } from "react";
import {
  clickReset,
  clickSetBackgroundColor,
  clickSetTextStyle,
} from "./scripts";

import { FONT_ARRAY, COLOR_ARRAY, MAX_VALUE } from "./scripts";

const initArray = Array.from({ length: MAX_VALUE }, (_, index) => index + 1);

function App() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const pickRandomValue = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const pickRandomColor = () => {
    return pickRandomValue(COLOR_ARRAY);
  };

  const pickRandomFontStyle = () => {
    return pickRandomValue(FONT_ARRAY);
  };

  useEffect(() => {
    const $container = document.querySelector("#container");
    const shuffledArray = shuffleArray([...initArray]);

    while ($container.firstChild) {
      // 2번 호출 되는 과정에서 append가 2사이클 진행되어 초기화 시, container 내부 요소를 비우고 시작
      $container.removeChild($container.firstChild);
    }

    shuffledArray.forEach((item) => {
      const div = document.createElement("div");
      div.id = "id-" + item;
      div.className = `item ${pickRandomColor()} ${pickRandomFontStyle()}`;
      div.innerHTML = item;
      $container.appendChild(div);
    });
  }, []);

  return (
    <>
      <h1>Kernel360 Web Dev Base</h1>
      <div id="container" className="container"></div>
      <div id="input-container" className="input-container">
        <div className="input-section">
          <label htmlFor="id-input" className="input-label">
            ID
            <input type="text" id="id-input" />
          </label>
          <button
            id="set-color-button"
            value="bg-red"
            onClick={clickSetBackgroundColor}
          >
            Set BG red
          </button>
          <button
            id="set-color-button"
            value="bg-green"
            onClick={clickSetBackgroundColor}
          >
            Set BG green
          </button>
          <button
            id="set-color-button"
            value="bg-blue"
            onClick={clickSetBackgroundColor}
          >
            Set BG blue
          </button>
        </div>
        <div className="input-section">
          <label htmlFor="class-input" className="input-label">
            Class
            <input type="text" id="class-input" />
          </label>
          <button
            id="set-text-button"
            value="text-bold"
            onClick={clickSetTextStyle}
          >
            Set text bold
          </button>
          <button
            id="set-text-button"
            value="text-italic"
            onClick={clickSetTextStyle}
          >
            Set text italic
          </button>
          <button
            id="set-text-button"
            value="text-strike"
            onClick={clickSetTextStyle}
          >
            Set text strike
          </button>
          <button
            id="set-text-button"
            value="text-underline"
            onClick={clickSetTextStyle}
          >
            Set text text underline
          </button>
        </div>
        <div className="input-section">
          <label htmlFor="selector-input" className="input-label">
            Selector
            <input type="text" id="selector-input" />
          </label>
          <button id="reset-button" onClick={clickReset}>
            Reset style
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
