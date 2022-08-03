alert("Click on each box!");
const one = document.getElementById("one");
 one.addEventListener("click", myOne);
  function myOne() {
  		document.body.style.backgroundColor = "red";
  }
  
const two = document.getElementById("two");
 two.addEventListener("click", myTwo);
  function myTwo() {
  		document.body.style.backgroundColor = "blue";
  }

const three = document.getElementById("three");
 three.addEventListener("click", myThree);
  function myThree() {
  		document.body.style.backgroundColor = "green";
  }

const four = document.getElementById("four");
 four.addEventListener("click", myFour);
  function myFour() {
  		document.body.style.backgroundColor = "white";
  }

