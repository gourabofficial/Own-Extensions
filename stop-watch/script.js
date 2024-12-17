let timeLeft = 0;
let timer;
let isRunning = false;

const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const timeLeftDisplay = document.getElementById('time-left');
const inputSection = document.getElementById('input-section');
const timerSection = document.getElementById('timer-section');

// Calculate total seconds
function calculateTotalSeconds() {
  const hours = parseInt(hoursInput.value || 0, 10) * 3600;
  const minutes = parseInt(minutesInput.value || 0, 10) * 60;
  const seconds = parseInt(secondsInput.value || 0, 10);
  return hours + minutes + seconds;
}

// Format time
function formatTime(time) {
  const h = String(Math.floor(time / 3600)).padStart(2, '0');
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const s = String(time % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// Start timer
function startTimer() {
  if (isRunning) return;
  const totalSeconds = calculateTotalSeconds();
  if (totalSeconds <= 0) return;

  timeLeft = totalSeconds;
  isRunning = true;

  inputSection.style.display = 'none';
  timerSection.style.display = 'block';

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      return;
    }
    timeLeft--;
    timeLeftDisplay.textContent = formatTime(timeLeft);
  }, 1000);

  timeLeftDisplay.textContent = formatTime(timeLeft);
}

// Reset timer
function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 0;

  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';

  inputSection.style.display = 'flex';
  timerSection.style.display = 'none';
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
