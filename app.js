const hourTime = document.getElementById("hour");
const minutesTime = document.getElementById("minutes");
const secondTime = document.getElementById("seconds");

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDeg = hours * 30 + minutes * 0.5;
  const minutesDeg = minutes * 6;
  const secondsDeg = seconds * 6;

  hourTime.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`;
  minutesTime.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`;
  secondTime.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
