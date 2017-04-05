/**
 * Created by Игорь on 05.04.2017.
 */
var divs = document.getElementsByClassName("slide");

var next = document.getElementById("next");

next.onclick = function(e){
    var active =  document.getElementsByClassName("active");
    active.nextSibling.classList.add("active");
}