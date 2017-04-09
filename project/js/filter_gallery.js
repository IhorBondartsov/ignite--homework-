/**
 * Created by Игорь on 09.04.2017.
 */

var ul_gallery_menu = document.getElementsByClassName("gallery_menu")[0];
var li_press = ul_gallery_menu.getElementsByTagName("li")[0];
ul_gallery_menu.addEventListener("click", filter);
var li_img_gallery = document.getElementsByClassName("gallery")[0].getElementsByTagName("li");

function filter(e) {
    elem = e.target;
    changeColor(elem);
    var type = elem.textContent.toLowerCase();

    for (var i = 0; i < li_img_gallery.length; i++) {
        var value_img = li_img_gallery[i].getElementsByClassName("type_img")[0].innerText.toLowerCase();

        console.log(type + " " + value_img);
        //remove invisible
        if (li_img_gallery[i].classList.contains("invisible")) {
            li_img_gallery[i].classList.remove("invisible");
        }
        // add invisible
        if (type != value_img && type!="all") {
            li_img_gallery[i].classList.add("invisible");
        }
    }

}

function changeColor(elem) {
    li_press.classList.remove("press");
    elem.classList.add("press");
    li_press = elem;
}

