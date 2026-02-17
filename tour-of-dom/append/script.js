console.log("Learn Append");

// get the parent
const sections = document.getElementById("section");

// create the element ul
const ul = document.createElement("ul");

// create the element li
const li1 = document.createElement("li");
li1.innerText = "item-1";

ul.appendChild(li1);

// append child
sections.appendChild(ul);
