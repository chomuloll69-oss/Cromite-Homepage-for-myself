function updateClock() {
  const now = new Date();
  const offset = 5 * 60 + 45; // +5:45 offset
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const nepTime = new Date(utc + offset * 60000);

  let hours = nepTime.getHours();
  let minutes = nepTime.getMinutes().toString().padStart(2, '0');

  // 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  document.getElementById('clock').textContent = `${hours}:${minutes} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
