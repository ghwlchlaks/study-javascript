// 자바스크립트는 객체 확장을 이용하여 상속과 비슷한 효과를 만들 수 있다. 

function Parent() {
    this.hello = 'hello'
}

function Child() {
    this.world = 'world'
    this.helloWorld = this.hello + ' ' + this.world;
}

Child.prototype = new Parent();
Child.prototype.constructure = Child;

const child = new Child();
console.log(child.helloWorld)