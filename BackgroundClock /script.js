function updateClock() {
  const clockElement = document.getElementById('clock');
  const dateElement = document.getElementById('date');
  const now = new Date();

  // Get time components
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;

  // Get date components
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Update the clock and date every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the time and date immediately
