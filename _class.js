// 클래스를 정의하는 방법

// 1. 함수 이용

function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
 
// 안좋은 방법! 아래 계속 읽어보세요.
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

var apple = new Apple('macintosh');
apple.color = "reddish";
alert(apple.getInfo());

// 객체 리터럴 이용
var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
};
apple.color = "reddish";
alert(apple.getInfo());
