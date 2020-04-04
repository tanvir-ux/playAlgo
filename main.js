
// may be here we can test the marge conflict ;

// this is from master branch 

let el = document.createElement("div");

el.textContent = "Hello World";
el.style.fontSize = "40px";
el.style.padding = "0 20px";

let body = document.querySelector("body");
body.appendChild(el);

let button = document.createElement("button");
button.textContent = "New Item";
button.style.width = "200px";
button.style.height = "30px";
button.style.margin = "0 0 0 20px";
body.appendChild(button);

button.addEventListener("click", addItem);

let removeButton = document.createElement("button");
removeButton.textContent = "Remove Item";
removeButton.style.width = "200px";
removeButton.style.height = "30px";
removeButton.style.margin = "0 0 0 100px";
body.appendChild(removeButton);

button.addEventListener("click", display);

const items = []

function display(){
    console.log("I will display if you click.");
}

function addItem(){
    let newItem = document.createElement("div");
    newItem.textContent = "New Item";
    newItem.style.padding = "0 20px";
    body.appendChild(newItem);
}

