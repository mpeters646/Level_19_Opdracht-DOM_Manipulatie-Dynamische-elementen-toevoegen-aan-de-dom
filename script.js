const buttons = document.querySelectorAll(".big-five-button");

const newAnimal = buttons.forEach(button => {
  button.addEventListener("click", () => {
    // console.log(button.innerText);
    return button.innerText;
  });
});

const newLi = document.createElement("li");
newLi.className = "big-five-list-item";

const newSpottedAnimal = document.getElementById("spotted-animals-list");
newSpottedAnimal.appendChild(newLi);
// newLi.appendChild(newAnimal);

// console.log(buttons);
// console.log(newLi);
console.log(newAnimal);
console.log(newSpottedAnimal);
