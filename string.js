// 문자열 중복제거
const str = 'abbbaccde'
const newStr = [...new Set(str)].join('')
// join()연산을 하면 배열의 원소들은 연결하여 하나의 값으로 만듭니다.
console.log(newStr)


// 문자열 유니크한 원소 뽑아내기 
const str1 = '23132115'
// filter메소드를 이용하여 특정 요소 제거
const newStr1 = str1.split('').filter(value => str1.indexOf(value) === str1.lastIndexOf(value))
console.log(newStr1)