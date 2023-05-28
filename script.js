var counters = document.querySelectorAll(".number");
var countDownDate = new Date("June 11, 2023 14:21:00").getTime();
var currentTime = new Date().getTime();
var distance = countDownDate - currentTime;
var time = [
            Math.floor(distance / (1000 * 60 * 60 * 24)),
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            Math.floor((distance % (1000 * 60)) / 1000)
            ];
counters.forEach((item, index) => {
    item.innerText = time[index]
})

const countdown = setInterval(() => {
    currentTime = new Date().getTime();
    distance = countDownDate - currentTime;
    time = [
                Math.floor(distance / (1000 * 60 * 60 * 24)),
                Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                Math.floor((distance % (1000 * 60)) / 1000)
               ];
    counters.forEach((item, index) => {
        item.innerText = time[index]
    })
    if (distance <= 0) {
        clearInterval(countdown);
    }
}, 1000)