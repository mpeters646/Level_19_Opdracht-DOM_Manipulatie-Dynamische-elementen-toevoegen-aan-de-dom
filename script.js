const spottedAnimalButtons = document.querySelectorAll('.big-five-button');
const removeFirstAnimalButton = document.getElementById('remove-first-item-button');
const removeAllAnimalsButton = document.getElementById('remove-all-button');

spottedAnimalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const newSpottedAnimal = document.getElementById('spotted-animals-list');
    const newLi = document.createElement('li');
    newLi.className = 'spotted-animals-list-item';
    newSpottedAnimal.appendChild(newLi);
    newLi.innerText = button.innerHTML;
  });
});

removeFirstAnimalButton.addEventListener('click', () => {
  let list = document.getElementById('spotted-animals-list');
  if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
});

removeAllAnimalsButton.addEventListener('click', () => {
  let list = document.getElementById('spotted-animals-list');
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
});
