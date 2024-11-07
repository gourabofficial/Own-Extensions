function updateClock() {
  const clockElement = document.getElementById('clock');
  const dateElement = document.getElementById('date');
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Determine AM or PM
  const amPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  hours = String(hours).padStart(2, '0'); 

  clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
}


setInterval(updateClock, 1000);
updateClock(); // Initial call to set the time and date immediately
