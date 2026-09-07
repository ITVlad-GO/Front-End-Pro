let time = 84;

const timer = document.querySelector("#timer");

const interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    time--;

    if (time < 0) {
        clearInterval(interval);
    }
}, 1000);