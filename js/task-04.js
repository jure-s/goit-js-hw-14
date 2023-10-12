const counterValue = document.getElementById('value');
let value = 0;

document.getElementById('counter').addEventListener('click', (event) => {
  if (event.target.dataset.action === 'increment') {
    value += 1;
  } else if (event.target.dataset.action === 'decrement') {
    value -= 1;
  }

  counterValue.textContent = value;
});