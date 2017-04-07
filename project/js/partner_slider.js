/**
 * Created by Игорь on 06.04.2017.
 */
var sliderPartner = document.getElementsByClassName("slider_partner")[0];
var divsPartner = sliderPartner.getElementsByClassName("slide");
var timer2 = setInterval(nextPartner, 1000);


function nextPartner() {
    var activElements = sliderPartner.getElementsByClassName("active");
    var lastElemen = divsPartner[divsPartner.length - 1];

    activElements[activElements.length - 1].classList.remove("active");
    sliderPartner.removeChild(lastElemen);
    lastElemen.classList.add("active");
    sliderPartner.insertBefore(lastElemen, activElements[0]);
}