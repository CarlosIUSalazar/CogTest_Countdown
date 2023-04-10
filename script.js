const timerElement = document.getElementById("timer");

function updateCountdown() {
  const endTimeUTC = new Date("April 16, 2023 11:00:00 UTC"); 
  const currentTime = new Date();
  const timeRemaining = endTimeUTC - currentTime;

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);