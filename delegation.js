/**
 *   <ul id="todo-app">
      <li class="item">Walk the dog</li>
    <li class="item">Pay bills</li>
    <li class="item">Make dinner</li>
    <li class="item">Code for one hour</li>
     </ul>
 */

let items = document.getElementsByClassName("item");

for (let item of items) {
  item.addEventListener("click", function() {
    alert("click! " + item.innerHTML);
  });
}

let app = document.getElementById("app");

app.addEventListener("click", function(e) {
  if (e.target && e.target.nodeName === "LI") {
    let item = e.target;
    alert("click!" + item.innerHTML);
  }
});
