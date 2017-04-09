/**
 * Created by Игорь on 09.04.2017.
 */
var scroll = function (e) {
    e.preventDefault();
    var id = "#" + $(e.target).attr("data-where");

    var mnuH = $('header .top_menu').height();

    var top = $(id).offset().top -mnuH;
    $('body,html').animate({scrollTop: top}, 1500);
}
var ulMenu =document.getElementById("menu_item");
ulMenu.onclick = scroll;

var contact_us_bt = document.getElementById("contact_us_bt");
contact_us_bt.onclick = scroll;