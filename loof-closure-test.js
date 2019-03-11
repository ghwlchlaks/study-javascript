// 클로저란 내부함수에서 외부함수의 변수에 접근하는 것을 말합니다. 
// 이것으로 인해 private 키워드와 같이 정보은닉의 효과를 얻을 수 있습니다. 

// 클로저에서 헷갈리는 루프문
const arr =[1,2,3,4,5];
// for (var i =0; i< arr.length; i++) {
//     setTimeout(function() {
//         console.log(i)
//     },2000)
// }

// 의 결과값은 0,1,2,3,4 가 아닌 5,5,5,5,5이다. 
// 이유는 자바스크립트의 var는 function scope이기 때문에 2초뒤에 받은 i의 값을 출력한다.
// 만약 arr[i]라면 같은 이유로 undefined를 출력한다. 
// arr의 함수의 범위는 끝난 이후에 setTimeout에서 참조하고 있기 때문이다.

// 고치려면
// 1
// for (let i=0; i< arr.length; i++) {
//     setTimeout(function() {
//         console.log(arr[i])
//     },2000)
// }

// 의 결과값은 0,1,2,3,4이다 이유는 let의 범위는 block 스코프이기 때문이다. 

// 2
for (var i=0; i< arr.length; i++) {
    setTimeout(function(input_i) {
        return function() {
            console.log(arr[input_i])
        }
    }(i),2000)
}
