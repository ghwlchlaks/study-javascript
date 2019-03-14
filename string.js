// 문자열 중복제거
const str = 'abbbaccde'
const newStr = [...new Set(str)].join('')
// join()연산을 하면 배열의 원소들은 연결하여 하나의 값으로 만듭니다.
console.log(newStr)