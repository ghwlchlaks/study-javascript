// 자바스크립트에서 ==, ===의 차이는 typeof를 검사하는지에대한 유무이다
// 자바스크립트는 동적타입 언어이기 때문에 '1'과 1을 구별하지 못한다. 이때 typeof가 포함되어있는 === 연산자를 이용하여 비교해야한다. 

if (1 == '1') {
    console.log('equal')
} else {
    console.log('not equal')
}

if (1 === '1') {
    console.log('equal')
} else {
    console.log('not equal')
}