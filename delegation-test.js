// event delegatinon

/**
  <ul id="todo-app">
    <li class="item">Walk the dog</li>
    <li class="item">Pay bills</li>
    <li class="item">Make dinner</li>
    <li class="item">Code for one hour</li>
  </ul>
 */


 // for문을 이용한 자식 요소에 동적으로 이벤트 추가
 const items = document.getElementsByClassName('item');
 for (item of items) {
     item.addEventListener('click', function() {
         alert('click : ' + item.innerHTML);
     })
 }

 // 이벤트 위임을 이용한 자식 요소에 동적으로 이벤트 추가 
const app = document.getElementById('todo-app');
app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
        alert('click : ' + e.target.innerHTML);
    }
})