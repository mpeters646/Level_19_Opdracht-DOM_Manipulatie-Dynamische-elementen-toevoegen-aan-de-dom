const buttons = document.querySelectorAll('.big-five-button');
// const lion = document.querySelectorAll('.big-five-button');

const button = () => {
  buttons.forEach((button) => console.log(button.innerText));
};

console.log(buttons);
console.log('~~~~~~~~');
console.log(buttons[0].innerText);
console.log(buttons[1].innerText);
console.log(buttons[2].innerText);
console.log(buttons[3].innerText);
console.log(buttons[4].innerText);
console.log('~~~~~~~~');
