const buttons = document.querySelectorAll('.big-five-button');
const newSpottedAnimal = document.getElementById('spotted-animals-list');
let newLi = document.createElement('li');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    newLi.className = 'spotted-animals-list-item';
    newSpottedAnimal.appendChild(newLi);
    newLi.innerText = button.innerHTML;
  });
});
