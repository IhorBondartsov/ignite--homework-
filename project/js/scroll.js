var timerScroll;
var menuScrollHaight = document.getElementsByClassName("top_menu")[0].getBoundingClientRect().height;
var ulMenu =document.getElementsByClassName("menu_item")[0];
ulMenu.onclick = function(e){
    var elem= e.target;
    return up(elem);
};


//function myScroll(e) {
//
//    e.preventDefault();
//
//    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//    var elem = document.getElementById(e.target.getAttribute("data-where"));
//    var boundElem = elem.getBoundingClientRect();
//
//    if (top > menuScrollHaight + boundElem.top) {
//        window.scrollBy(0, -1);
//        timerScroll = setTimeout(myScroll(e), 20);
//    } else if (top < menuScrollHaight + boundElem.top) {
//        window.scrollBy(0, +1);
//            timerScroll = setTimeout(myScroll(e), 20);
//    } else clearTimeout(timerScroll);
//    return false;
//}



var t;
function up(elem) {
     console.log(elem);
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
}