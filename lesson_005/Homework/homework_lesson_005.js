//Task 1
// Первый вариант не устойчив к иньекциям, отрабатывает нормально.
function mathematic() {
    var message = "Please entered math expression";
    var result = calculater(message)

    while (isNaN(parseFloat(result)) && !isFinite(result)) {
        result = calculater("Incorrect value. Please try again\n" + message);
    }

    return result;
}

function calculater(message) {
    var expression = prompt(message);
    try {
        var res = eval(expression);
    }
    catch (e) {
        alert(expression + " - This is incorrect expression");
        res = undefined;
    }
    return res;
}

console.log(mathematic());


//variant 2


var regexp = /^\d+$/;

var s = "13123123";
var s2 = "13123123asd";
console.log(regexp.test(s));
console.log(regexp.test(s2));

//Task 2 - Переработать!!!

function FsmartSum(arg) {
    var sum = arg

    function summ(b) {
        for (var i = 0; i < arguments.length; i++) {
            if (!isNaN(parseFloat(arguments[i])) && isFinite(arguments[i])) {
                sum += arguments[i];
            } else {
                sum += 0;
            }
        }
        return summ;
    }

    summ.toString = function () {
        return sum;
    };

    return summ;
};

var smartSum = FsmartSum(0);
console.log(smartSum(3)) // 3;
console.log(smartSum(1, 2)) // 3;
console.log(smartSum(1, 3)(2)) // 6;
console.log(smartSum(1, 2)(3, 4, 5)(6)(7, 10)) // 38;


// Task 3

function reversTimer(number) {
    var timer = setInterval(function () {
        console.log(number--)
        if (number == -1) {
            clearTimeout(timer);
        }
    }, 1000);
};

var timers = reversTimer(10);