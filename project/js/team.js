/**
 * Created by Игорь on 09.04.2017.
 */
var member_team = document.getElementsByClassName("member_team");
var triangle_team = document.getElementsByClassName("triangle");
var team_description = document.getElementsByClassName("about_member");

var active_triangle = triangle_team[0];
var active_description = team_description[0];

function addListTeam() {
    for (var i = 0; i < member_team.length; i++) {

        member_team[i].setAttribute("data", i);
        member_team[i].addEventListener("click", change_member);
    }
};

function change_member(e) {
    var value = this.getAttribute("data");
    addSkills(this.getElementsByClassName("name")[0]);

    active_triangle.classList.remove("active");
    active_description.classList.remove("active");

    active_triangle = triangle_team[value];
    active_description = team_description[value];

    active_triangle.classList.add("active");
    active_description.classList.add("active");
};

function addSkills(elem) {

    var html = elem.getAttribute("data-html");
    var ai = elem.getAttribute("data-ai");
    var js = elem.getAttribute("data-ja");
    var photo = elem.getAttribute("data-photo");
    document.getElementById("html").innerText = html + "%";
    document.getElementById("ai").innerText = ai + "%";
    document.getElementById("js").innerText = js + "%";
    document.getElementById("photo").innerText = photo + "%";
    rewrite(html, ai, js, photo);

}

function rewrite(html, ai, js, photo) {
    var circle_progress = document.getElementsByClassName("paint_line");
    for (var i = 0; i < circle_progress.length; i++) {
        var value = 280 - parseInt(arguments[i]) * 2.8;
        circle_progress[i].setAttribute("stroke-dashoffset", value);
    }
}

addListTeam();