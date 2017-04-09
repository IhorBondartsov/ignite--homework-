/**
 * Created by Игорь on 09.04.2017.
 */
var mailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
var subPattern = /[A-Za-z0-9]+$/;
var namePattern = /[A-Za-z]+$/;

var mail = $('#mail');
var sub = $('#subjext');
var userName = $('#userName');
//var user_name = $('#user_name');
//console.log(name);
var check = function(elem, pattern){
    var valid = elem.parent().find('.valid');
    if(elem.val() != ''){
        if(elem.val().search(pattern) == 0){
            valid.text('Подходит');
            elem.removeClass('error').addClass('ok');
        } else{
            valid.text('Не подходит');
            $('#submit').attr('disabled', true);
            elem.addClass('ok');
        }
    } else{
        valid.text('Поле не должно быть пустым!');
        elem.addClass('error');
    }
};
var checkMail = function () {
    check(mail, mailPattern )
};
var checkName = function () {
    check(userName, namePattern )
};
var checkSub = function () {
    check(sub, subPattern )
};
mail.on('input', checkMail);
sub.on('input', checkSub);
userName.on('input', checkName );
//user_name.on('input', checkName);