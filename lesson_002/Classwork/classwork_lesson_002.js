/**
 * Created by Игорь on 21.03.2017.
 */

// Task 1
// result is alert true
// Yes it is change
//Do nothing

//var value = 0;
//function f() {
//    if (1) {
//        value = true;  ----> There is we are changing global variable
//    } else { ------> Do not work, because if(1) - always true
//        var value = false;
//    }
//    alert( value );
//}


//Task 2

function someFunction() {
    var count = 0;
    return function () {
        return count++;
    };
}

var counter = someFunction();

document.write(counter());
document.write("<hr/>");

document.write(counter());
document.write("<hr/>");

document.write(counter());
document.write("<hr/>");

//Task 3

//First variant
function makeArmy() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = (function (num) { // функция-стрелок
            return function () {
                alert(num);
            }
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}
var army = makeArmy();
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10, а должен 5.

//Second variant
function makeArmy2() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {
        function shooter(num) { // функция-стрелок
            return function () {
                alert(num);
            }
        };
        shooters.push(shooter(i));
    }
    return shooters;
}
var army2 = makeArmy2();
army2[0](); // стрелок выводит 10, а должен 0
army2[5](); // стрелок выводит 10, а должен 5.

//Thread variant
function makeArmy3() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function shoot() {
            alert( shoot.i );
        };
        shooter.i = i;
        shooters.push(shooter(i));
    }
    return shooters;
}
var army3 = makeArmy3();
army2[0](); // стрелок выводит 10, а должен 0
army2[5](); // стрелок выводит 10, а должен 5.
console.log(army3.toString());

