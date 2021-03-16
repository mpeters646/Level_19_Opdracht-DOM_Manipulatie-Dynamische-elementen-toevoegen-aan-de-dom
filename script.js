const buttons = document.querySelectorAll('.big-five-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => console.log(`Clicked on ${button.innerText}!`));
});

// console.log(buttons);
