import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const picker = document.querySelector('#datetime-picker');
const mydays = document.querySelector('[data-days]');
const myhours = document.querySelector('[data-hours]');
const myminutes = document.querySelector('[data-minutes]');
const myseconds = document.querySelector('[data-seconds]');
const ButtomStart = document.querySelector('[data-start]');
let Id = null;

ButtomStart.toggleAttribute('disabled');

const options = {
    enableTime: true,
    time_24hr: true,
    // defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= new Date()) {
        ButtomStart.disabled = true;
        return Notiflix.Notify.failure('Please choose a date in the future');
      } else {
        ButtomStart.disabled = false;
      }
    }
  };

const flp = flatpickr(picker, options);
ButtomStart.addEventListener('click', onButtomStart);

function onButtomStart() {
    Id = setInterval(() => {
    ButtomStart.disabled = true;
    const sel = flp.selectedDates[0] - Date.now();

    
        if (sel <= 0) {
            clearInterval(Id);
            ButtomStart.disabled = false;
            flp.clear();
            return;
        }

        const {days, hours, minutes, seconds} = convertMs(sel);
        mydays.textContent = addLeadingZero(days);
        myhours.textContent = addLeadingZero(hours);
        myminutes.textContent = addLeadingZero(minutes);
        myseconds.textContent = addLeadingZero(seconds);
    }, 1000);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}



  
   