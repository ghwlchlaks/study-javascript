// 자바스크립트에서 array에 추가하는 방법은 array.push(), array[index] = value 방법이 있다
// 주의점은 append함수는 지원하지 않는다.

let foods =  ['a', 'b', 'c'];

foods.push('d')

foods[4] = 'e'

console.log(foods);




// 배열 중복 제거
const arr  =  [1,1,3,4,5,1,4,2]
const newArr = [...new Set(arr)]
console.log(newArr)




// 배열 유니크한 원소 뽑아내기 
const arr1 = [1,2,3,4,4,2,1,5]
// 중복되지 않는 값 가져오기(중복되는값 필터링)
const newArr1 = arr1.filter(val => arr1.indexOf(val) === arr1.lastIndexOf(val))
console.log(newArr1)
