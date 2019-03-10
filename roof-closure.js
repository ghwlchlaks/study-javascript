/**
 * 클로저는 이너함수가 스코프 밖에 있는 변수에 접근하는 것
 * 정보은닉, 함수 팩토리를 생성할 때 사용
 */

const arr = [10, 11, 12, 13];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log("index : " + i);
  }, 3000);
}
// 결과 값 모두 3
// 이유 : setTimeout의 함수는 3초뒤에 실행됨. 그러므로 for문이 종료된 이후
// 마지막 인덱스가 적용됨
// setTimeout의 스코프와 for문의 스코프가 다르기 때문에 발생

//해결
// 1
// i 값을 setTimeout함수안에 전달하여 각 함수 호출마다 올바른 값을 접근하게 함
for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function(local_i) {
      return function() {
        console.log("index : " + local_i);
      };
    })(i),
    3000
  );
}

// 2
// es6의 let 키워드는 스코프가 block 스코프이므로 해결 됨
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log("index : " + i);
  }, 3000);
}
