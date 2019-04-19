// 오브젝트 생성 방법
let obj1 = new Object()
let obj2 = {}

// 객체 속성 변경 방법들
obj1.name = 'choi'
let name = obj1.name;
console.log(obj1)
// => {name: 'choi}


obj1['name'] = 'ji';
name = obj1['name'];
console.log(obj1)
// => {name: 'ji'}


// array
let a = ['dog', 'cat', 'test']
console.log(a.length, a)
// => 3, ['dog', 'cat', 'test']
a[100] = 'fox';
console.log(a.length, a)
// => 101 , ['dog', 'cat', 'test' , <97 empty items>, 'fox']

console.log(typeof a)
console.log(typeof a[0])
console.log(typeof a[90])

//=> object, string, undefined

let b = ['test', 'test1']
for (let i=0; i< b.length; i++) {
    console.log(b[i])
}

// 위에 코드는 루프를 반복할때마다 length 속성을 찾아보게되므로 비효율적

for (let i=0, item; item = b[i]; i++) {
    console.log(item)
}

for (let i in b){
    console.log(b[i])
}

// github에 적용되지 않음