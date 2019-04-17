/**
 * JavaScript에는 정수와 같은 것이 존재하지 않으므로, C 나 Java 에서 수학 계산을 한 경험이 있다면 산술할 때 약간 조심할 필요가 있습니다. 
 다음과 같은 경우를 주의해야 합니다:
 *  */

console.log(0.1 + 0.2)

// => 0.30000000000000004


// 문자열을 정수로 변환
console.log(parseInt('123', 10))
console.log(parseInt('010', 10))

// 2진수로 변환하고 싶다면
console.log(parseInt('11', 2))

// => 3

//단항 연산자 '+'를 사용하여 숫자로 변환 할 수도 있습니다. 
console.log(typeof '42')
console.log(typeof +'42')

// => string, number

//문자열이 수가아닌 경우 NaN을 반환합니다.
console.log(parseInt('hello', 10))

// => NaN


// NaN은 독성을 가지고 있으므로 어떤 수학연산이 와도 NaN을 반환합니다. 
console.log(NaN + 5)

// => NaN


// 값이 NaN인지 판별하는 isNaN함수를 제공합니다.
console.log(isNaN(NaN))

// => true

// 특별한값 Infinity와 -Infinity를 가지고 있습니다. 
console.log(1 / 0);
console.log(-1 / 0)

// => Infinity , -Infinity


//내장 함수 isFinite를 사용하여 Infinity, -Infinity, NaN의 값을 검사 할 수 있습니다. 
console.log(isFinite(1 / 0))
console.log(isFinite(-Infinity))
console.log(isFinite(Infinity))
console.log(isFinite(NaN) )
console.log(isFinite(1))

// => false, false, false, false, true