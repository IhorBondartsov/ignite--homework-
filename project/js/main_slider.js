/**
 * Created by Игорь on 05.04.2017.
 */

var sliderMain = document.getElementById("slider_main");
var divs = sliderMain.getElementsByClassName("slide");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var timer = setInterval(slider, 3000);
var flagForT = true;

function startTime() {
    timer = setInterval(slider, 3000);
    flagForT = true
}
function pauseTimer() {
    if(flagForT) {
        clearInterval(timer);
        setTimeout(startTime, 5000);
        flagForT = false;
    }
}

next.onclick = function () {
    pauseTimer();
    return slider();
}

prev.onclick = function () {
    pauseTimer();
    return slider(true);
}
// default direction to right. If you want to change on left you can write true in variable "changeOfDirection"
function slider(changeOfDirection) {
    var active = document.getElementsByClassName("active");
    var nextElem;
    if (changeOfDirection) {
        nextElem = active[0].previousElementSibling;
    } else {
        nextElem = active[0].nextElementSibling;
    }
    var indexOf = [].indexOf;

    if (nextElem == null || !nextElem.classList.contains("slide")) {
        nextElem = divs[divs.length - 1 - indexOf.call(divs, active[0])];
    }
    active[0].classList.remove("active");
    nextElem.classList.add("active");
}
