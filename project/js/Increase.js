/**
 * Created by Игорь on 09.04.2017.
 */
var elements = document.getElementsByClassName("increase");

function addIncrease() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", mouseover);
        elements[i].addEventListener("mouseout", mouseout);
    }
}


function mouseover(e){
    e.target.style.transform = "scale(1.1)"
}

function mouseout(e){
    e.target.style.transform = "scale(1)"
}

addIncrease();