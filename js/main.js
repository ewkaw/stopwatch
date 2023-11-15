const defaultValue = '00:00';
let stoperId;
let addOnce = false;
const $counter = document.getElementById('counter');
const $startBtn = document.getElementById('start-btn');
const $stopBtn = document.getElementById('stop-btn');
const $resetBtn = document.getElementById('reset-btn');

let startTime;
let elapsed = 0;

const startCounter = () => {
    elapsed += Date.now() - startTime;
    startTime = Date.now();
    const elapsedSeconds = Math.floor(elapsed / 1000);
    modulo = elapsedSeconds % 60
    minutes = Math.floor(elapsedSeconds / 60);
    if (minutes >= 0 && minutes <= 9)
        minutes = '0' + minutes;
    seconds = modulo;
    if (seconds >= + 0 && seconds <= 9)
        seconds = '0' + seconds;

    $counter.innerText = `${minutes}:${seconds}`
};

$startBtn.addEventListener('click', (e) => {
    startTime = Date.now();
    stoperId = setInterval(startCounter, 100);
    e.target.disabled = true;
});

$stopBtn.addEventListener('click', (e) => {
    $startBtn.innerText = "Wznów";
    clearInterval(stoperId);
    $startBtn.disabled = false;
});

$resetBtn.addEventListener('click', (e) => {
    $counter.innerText = defaultValue;
    clearInterval(stoperId);
    elapsed = 0;
    $startBtn.innerText = "Start";
    $startBtn.disabled = false;
});




