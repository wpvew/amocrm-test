const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  console.log('asd')
  return (seconds) => {
    const time = (sec) => new Date(+sec*1000).toISOString().split('T')[1].split('.')[0];
    timerEl.textContent = time(seconds)
    buttonEl.disabled = true;

    const interval = setInterval(() => {
      seconds--
      timerEl.textContent = time(seconds)
      if(seconds <= 0) {
        clearInterval(interval);
        buttonEl.disabled = false;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
