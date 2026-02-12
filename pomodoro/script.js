let workMinutes = 25;
let breakMinutes = 5;

let mode = "work";
let isRunning = false;
let interval = null;
let timeLeft = workMinutes * 60;

// elements
const timerEl = document.getElementById("timer");
const modeEl = document.getElementById("mode");

const workLenEl = document.getElementById("work-length");
const breakLenEl = document.getElementById("break-length");

const startPauseBtn = document.getElementById("start-pause");
const resetBtn = document.getElementById("reset");

// helpers
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function updateDisplay() {
  timerEl.textContent = formatTime(timeLeft);
  modeEl.textContent = mode.toUpperCase();
  workLenEl.textContent = workMinutes;
  breakLenEl.textContent = breakMinutes;
}

// timer logic
function tick() {
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    if (mode === "work") {
      mode = "break";
      timeLeft = breakMinutes * 60;
    } else {
      mode = "work";
      timeLeft = workMinutes * 60;
    }
  }
  updateDisplay();
}

// controls
startPauseBtn.addEventListener("click", () => {
  if (!isRunning) {
    interval = setInterval(tick, 1000);
    startPauseBtn.textContent = "Pause";
  } else {
    clearInterval(interval);
    startPauseBtn.textContent = "Start";
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;
  mode = "work";
  timeLeft = workMinutes * 60;
  startPauseBtn.textContent = "Start";
  updateDisplay();
});

// length controls
document.getElementById("work-increase").onclick = () => {
  if (!isRunning) {
    workMinutes++;
    timeLeft = workMinutes * 60;
    updateDisplay();
  }
};

document.getElementById("work-decrease").onclick = () => {
  if (!isRunning && workMinutes > 1) {
    workMinutes--;
    timeLeft = workMinutes * 60;
    updateDisplay();
  }
};

document.getElementById("break-increase").onclick = () => {
  if (!isRunning) {
    breakMinutes++;
    updateDisplay();
  }
};

document.getElementById("break-decrease").onclick = () => {
  if (!isRunning && breakMinutes > 1) {
    breakMinutes--;
    updateDisplay();
  }
};

// init
updateDisplay();
