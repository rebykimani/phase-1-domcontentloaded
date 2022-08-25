// Your code goes here
document
  .getElementById("text")
  .addEventListener("DOMContentLoaded", displayText());
console.log(text);

function displayText() {
  document.getElementById("text").innerHTML = "This is really cool!";
}
