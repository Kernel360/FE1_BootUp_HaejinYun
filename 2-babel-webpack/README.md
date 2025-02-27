## [회고] 🤔

boot-up 1일차 과정을 진행하고 새롭게 알게된 점, 느낀 점 등을 적어보았습니다.

<br/>

## 수행 내용 📋

- 순수 html, css, js로 Dom에 접근하여 요소를 수정하는 사이트 제작

<img src="https://github.com/user-attachments/assets/fdf446af-ac77-4d91-833d-5b1194ee9ccf" width="500" alt="ID">

- id를 입력받아 뒷 배경 색을 수정하는 기능

<img src="https://github.com/user-attachments/assets/61ecbac8-0ca5-48cc-9358-4b83bdf1daf1" width="500" alt="class">

- class를 입력받아 글씨 스타일을 수정하는 기능

<img src="https://github.com/user-attachments/assets/873e5d18-c9e7-4b27-bfbb-f6ef6a83d093" width="500" alt="selector">

- selector를 입력받아 모든 스타일을 초기화 하는 기능

- 직접 CRA 방식으로 프로젝트를 진행하는 것이 아닌 직접 babel, wabpack 등을 활용하여 프로젝트를 구성해봄.

<br/>

## 어려웠던 점 🕳

너무나도 당연하고 편하게 쓰던 부분을 직접 하나씩 설정해보니 진행하는 과정에서 시간 꽤 소요되었다.

단순하다고 생각했던 부분이 실제로 설정을 하려고 보니 복잡하게 느껴졌다.

<br/>

## 새롭게 알게된 점 🆙

### [webpack]

코드를 여러개의 번들로 분할하여 필요한 번들만을 가져다 쓸 수 있다는 점.

⇒ 이는 캐싱되어 이미 불러왔던 번들은 다시 부르지 않아 효율적인 로딩이 가능하다.

### [babel]

최신 JS 문법을 구식의 브라우저에서 이해 가능하도록 이전 문법으로 변환하는 기능 정도로 이해하고 있던 바벨을 Babel Plugins, Presets 등 좀 더 깊게 알 수 있게 되었다.

- Plugins 는 실제로 코드를 변환하는 역할을 한다.
- Preset은 Plugin을 모아놓은 것으로 plugin 그룹 한번에 설치 가능

번들링의 모드가 있어 `development`의 경우에는 개발자가 좀더 보기 쉽게 정렬되며, 주석 등이 포함되어 있지만 `product`의 경우에는 불필요한 요소를 모두 없애 경량으로 파일을 구성한다는 점을 알게 되었다.

<br/>

## 단계를 진행하며 느낀 점 ✍️

너무나 쉽게 쓰던 것을 처음부터 이해하고 사용하려니 진행함에 어려움이 있었다.

아주 예전에 사용하던 querySelector, getElementById, Class등을 다시 써보니 많이 까먹었다고 느껴졌다. 그러나 과제 테스트를 할 때, 리엑트를 못쓰는 경우도 많이 보아 기초를 잊지 않게 종종 연습해봐야겠다고 느꼈다.
