import Notiflix from 'notiflix';

const form = document.querySelector ('.form');
const formdelay = document.querySelector ('[name="delay"]');
const formstep = document.querySelector ('[name="step"]');
const formamount = document.querySelector ('[name="amount"]');



form.addEventListener('submit', e => {
  e.preventDefault();
  
  let delay = Number(formdelay.value);
  let step = Number(formstep.value);
  let amount = Number(formamount.value);

for (let i = 1; i <= amount; i += 1){
  createPromise(3, 2000)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += step;
};
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
    }
  }, delay);
  });  
  }
