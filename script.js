var counters = document.querySelectorAll(".number");
var time = [8, 23, 55, 41];

counters.forEach((item, index) => {
    item.innerText = (time[index].toString().length == 1)? "0"+time[index] : time[index]
})
const countdown = setInterval(() => {
    time[3] -= 1;
    
    if(time[0] == 0 && time[1] == 0 && time[2] == 0 && time[3] == 0) {
        counters[3].innerText = '00';
        clearInterval(countdown);
    } else {
        if(time[3] == 0 && time[2] != 0) {
            time[3] = 60;
            time[2] -= 1;
        }
        if(time[2] == 0 && time[1] != 0) {
            time[2] = 59;
            time[1] -= 1;
        }
        if(time[1] == 0 && time[0] != 0) {
            time[1] = 11;
            time[0] -= 1;
        }
    }
    counters.forEach((item, index) => {
        item.innerText = (time[index].toString().length == 1)? "0"+time[index] : time[index]
    })
}, 1000)