// 브라우저 이벤트와 같이 엄청나게많은 이벤트가 일어나는 것을 방지하기위해서 사용하는 방법
// 일정 간격을 두어 일정시간안에서는 특정이벤트가 일어나지 않게 함.

function debounce(fn, delay) {
    let timer = null;

    return function() {
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args)
            // context(this)에 argument(배열)를 전달한다.
        }, delay)
    }
}


function foo() {
    console.log('you are scrolling');
}

let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000))

// debounce를 호출했음에도 불구하고 debounce안에 내부(익명)함수가 외부함수에 timer(변수)를 참조하고 있으므로
// 소멸되지않고 남아있다. (클로저)
// call은 일반적인 함수와같이 매개변수를 직접 받는다. apply느느 매개변수를 배열로 받는다.
