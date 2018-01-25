# events in javascript dom (document object model)

we can write js in 3 ways in html 

* inline 
* internal
* external

we can add event and add event definition inline. we can add click event inline   
~~~js
  <h1 onclick="alert('hello world ')">this is heading one</h1>
  <h1 onclick="this.innerText='hello world from js'">this is heading two</h1>
~~~

we can call a function in-line wich is defined in external or internal function. we can pass value to function as well.    

~~~js
<h1 onclick="helloFn(this)">this is heading three</h1>
~~~
in this case `helloFn` in define in our external js file


We can add `onclick` function in pure javaScript also.       

~~~php
var h = document.getElementById('some_heading')
h.onclick = function () {
  h.innerText = 'this is also changed from js. and js code only inside js'
}
~~~
in this case we can't add another `onclick` events so good alternative will be followings   

## element.addEventListener('event_name', function);
addEventListener first parameter is event name second parameter is a function. using addEventListener method we can attach a event to a element. This is the best event listener in javascript. we can bind more that one events at a time using add event listener

~~~js
var heading2 = document.getElementById('some_heading2')
function heading2Fn () {
  this.innerHTML = 'this is new content of heading 6'
  this.style.color = 'tomato'
}
heading2.addEventListener('click', heading2Fn);
~~~






















