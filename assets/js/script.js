let interval = 0;
let launchDate = new Date('2021-01-01 00:00:00').getTime();

const daysElement = document.querySelector('.days-number');
const hoursElement = document.querySelector('.hours-number');
const minutesElement = document.querySelector('.minutes-number');
const secondsElement = document.querySelector('.seconds-number');

function pad(number) {
  return number < 10 ? `0${number}` : number;
}

function update() {
  let now = new Date().getTime();

  let time = launchDate - now;

  if (time > 0) {
    daysElement.innerHTML = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    hoursElement.innerHTML = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    minutesElement.innerHTML = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    secondsElement.innerHTML = pad(Math.floor((time % (1000 * 60)) / 1000));
  } else {
    clearInterval(interval)

    interval = 0;

    daysElement.innerHTML = pad(0);
    hoursElement.innerHTML = pad(0);
    minutesElement.innerHTML = pad(0);
    secondsElement.innerHTML = pad(0);
  }
}

(function start() {
  interval = setInterval(update, 1000);
})();
