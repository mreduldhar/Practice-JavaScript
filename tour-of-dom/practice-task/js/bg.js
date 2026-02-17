// Background Toggle
console.log("Background Change");

const bg = document.getElementById("bg");

const btn = document.getElementById("btn");

// console.log(btn);

btn.addEventListener("click", function () {
  //   bg.style.backgroundColor = "green";
  //   console.log("changed");

  bg.classList.toggle("bg-color");
  console.log("Toggled");
});

// Level 2: Multiple Elements & Loop

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
  const items = document.querySelectorAll("#taskList li");
  console.log("list:", items);

  items.forEach(function (item) {
    item.textContent += " - Done";
  });
});
