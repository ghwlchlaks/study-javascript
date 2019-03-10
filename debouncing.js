// 브라우저 이벤트 중에는 윈도우 크기를 재조정하거나 페이지 스크롤을 내리는
// 등의 짧은 시간에 다수 발생되는 이벤트가 있음.
// 하지만 사용자가 페이지를 스크롤을 하게되면 수많은 이벤트가 발생하게되고
// 그에따른 성능 저하가 발생함.
// 이것을 해결하기위해 이벤트 발생시 시간간격을 두어 성능 이슈를 해결하는 방법

// 이벤트를 감쌀 디바운싱 함수
function debounce(fn, delay) {
  let timer = null;

  // 타이머 변수에 접근 가능한 클로저 함수
  return function() {
    let context = this;
    let args = arguments;

    // 만약 이벤트가 호출되면 타이머를 초기화하고 다시 시작
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

// 사용자가 스크롤할때 호출되는 이벤트 함수
function foo() {
  console.log("scoll");
}
// 이벤트 함수를 디바운싱 함수로 감싸서 2초마다 발생하도록 함
let elem = document.getElementById("container");
elem.addEventListener("scroll", debounce(foo, 200));
