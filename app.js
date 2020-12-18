var btn = document.querySelector("#btn");
var textinput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");


function clickHandler() {
   outputDiv.innerText = "Happy Christmas " + textinput.value;
};

btn.addEventListener("click", clickHandler)