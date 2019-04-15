// 클로저란 무엇인가
// 클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수를 일컫습니다. 스코프 체인(scope chain)으로 표현되기도 합니다. 클로저는 세가지 스코프 체인을 가집니다: 클로저 자신에 대한 접근(자신의 블럭내에 정의된 변수), 외부 함수의 변수에 대한 접근, 그리고 전역 변수에 대한 접근. 이렇게 3단계로 구분할 수 있습니다.
// 내부 함수는 외부 함수의 변수뿐만 아니라 파라미터에도 접근할 수 있습니다. 단, 내부 함수는 외부 함수의 arguments 객체를 호출할 수는 없습니다.

function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // 이 내부 함수는 외부함수의 변수뿐만 아니라 파라미터 까지 사용할 수 있습니다.
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}
showName("Michael", "Jackson");



