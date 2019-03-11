/**
 * 함수를 호출하는 방법
 * 1. ()
 * 2. call()
 * 3. apply()
 */

 let ex = function(x, y, z) {
     return x + y + z
 }

 console.log(ex(1,2,3));
 console.log(ex.call(null, 1,2,3));
 console.log(ex.apply(null, [1,2,3]))
 console.log('---------------------------------------------')
 // call 과 apply에서 null의 역할 = this를 대체

 let obj = {
    name: 'choi',
    word: function() {
        console.log(this.name)
    }
 }

 let obj2 = {
     name: 'kang'
 }

 obj.word();
 obj.word.call(obj2)
 console.log('---------------------------------------------')
 // obj.word.call(obj2(this)) this가 가리키는 값이 obj2로 향하게 바꿈


 /** bind
  * call, apply와 다르게 호출하지 않는다는 점.
  */
 let bind_test = obj.word.bind(obj2);
 bind_test();
 console.log('---------------------------------------------')
 // bind : this의 값을 바꾼 것을 bind_test에 할당 호출은 하지 않음
 
 // call(this,1,2,3) == bind(this)(1,2,3)