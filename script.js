function helloFn (el) {
  el.innerText = 'this is also change by js';
}

var h = document.getElementById('some_heading')
h.onclick = function () {
  h.innerText = 'this is also changed from js. and js code only inside js'
}

var heading2 = document.getElementById('some_heading2')
function heading2Fn () {
  this.innerHTML = 'this is new content of heading 6'
  this.style.color = 'tomato'
}
heading2.addEventListener('click', heading2Fn);
