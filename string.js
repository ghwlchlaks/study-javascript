// 문자열 중복제거
const str = 'abbbaccde'
const newStr = [...new Set(str)].join('')
// join()연산을 하면 배열의 원소들은 연결하여 하나의 값으로 만듭니다.
console.log(newStr)

console.log('-----------------------------------')

// 문자열 유니크한 원소 뽑아내기 
const str1 = '23132115'
// filter메소드를 이용하여 특정 요소 제거
const newStr1 = str1.split('').filter(value => str1.indexOf(value) === str1.lastIndexOf(value))
console.log(newStr1)

console.log('-----------------------------------')


// 형변환
// 문자 -> 숫자
const str2 = '123';
// + 붙혀주면 됨
const strToNum = +str
console.log(typeof strToNum);

// 숫자 -> 문자
const num = 123
// 문자열인 '' 추가
const numToStr = '' + num
console.log(typeof numToStr)

console.log('-------------------------------------')
