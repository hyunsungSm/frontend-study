// querySelector('CSS 선택자')
// HTML에서 해당 요소를 검색하여 찾은 첫 번째 요소 하나만 반환
// 요소를 찾지 못하면 null을 반환
const boxEl = document.querySelector('.box');
console.log(boxEl);

// 요소에 이벤트 리스너 등록하기
// 이벤트: 마우스(click), 스크롤(scroll), 키보드(keydown) 등 다양함
// addEventListener() 메소드:
// 해당 요소에 지정한 이벤트가 발생하는지 듣고 있다가
// 실제 이벤트가 발생하면 연결된 콜백 함수(Event Handler)를 실행
// boxEl.addEventListener('이벤트명', 함수);

boxEl.addEventListener('click', function (e) {
  console.log('Click!!');

  // (중요) this와 event 객체
  console.log(this); // this: 이벤트 리스너에서의 this는 이벤트가 바인딩된 요소를 가리킴(예: <div>)
  console.log(e.target); // e.target: 실제로 클릭된 DOM 요소(예: <div> or 자식 요소)

  // classList 속성: HTML 요소의 class 속성에 대한 제어 명령이 포함
  // 추가하기
  boxEl.classList.add('active'); // 요소에 active라는 클래스를 추가

  // 확인하기
  let hasActive = boxEl.classList.contains('active'); // 요소에 active라는 클래스 값이 있는지 확인
  console.log(hasActive);

  // 제거하기
  boxEl.classList.remove('active'); // 요소에 active라는 클래스 값이 있으면 제거
  hasActive = boxEl.classList.contains('active');
  console.log(hasActive);

  // 토글하기
  // if (boxEl.classList.contains('on')){
  //   boxEl.classList.remove('on');
  // } else {
  //   boxEl.classList.add('on');
  // }

  // toggle 기능이 있음
  boxEl.classList.toggle('on');
});
// 활용 예: active라는 클래스를 이용해 스타일을 지정하고 클릭한 특정 요소에 스타일을 적용할 때

// 참고 링크
// 이벤트 종류: https://www.w3schools.com/jsref/dom_obj_event.asp (<-- 한 번 정도 슥 읽어볼 것!)
// HTML DOM 속성/메소드: https://www.w3schools.com/jsref/dom_obj_document.asp
