/**
 * Created by Игорь on 08.04.2017.
 */
var activDiv = document.getElementsByClassName("div_review")[0];
var divs_target = document.getElementsByClassName("div_review");

function createBtn(i) {
    var btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("name", i);
    btn.className = 'js_button';

    return btn;
}

function countDiv(idNameWhen) {
    var target_div = document.getElementById(idNameWhen);
    for (var i = 0; i < divs_target.length; i++) {
        var btn = createBtn(i);
        target_div.appendChild(btn);
        btn.addEventListener("click", normal);

    }

}

function normal(e) {
    var div = divs_target[e.target.name];
    activDiv.classList.remove("active");
    div.classList.add("active");
    activDiv = div;
};


countDiv("btn_java_script");

