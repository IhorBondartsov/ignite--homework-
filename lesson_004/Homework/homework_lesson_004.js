// Task 1
// Так же можно одолжить метод splice для копирования массива
function call(context) {
    arguments.slice = [].slice;
    return this.apply(context, arguments.slice(1));
}

//Task 2

function isFunction(object) {
    if (typeof object == 'function') {
        return true;
    }
    return false;
}

function compose(value) {
    for (var i = 1; i < arguments.length; i++) {
        if (isFunction(arguments[i])) {
            value = arguments[i].call(this, value);
        } else {
            console.log("arguments[" + i + "]" + " it is not function, so we did not use it!")
        }
    }
    return value;
}

var doubleTheValue = function (val) {
    return val * 2;
};
var addOneToTheValue = function (val) {
    return val + 1;
};
alert(compose(5, doubleTheValue));
alert(compose(5, doubleTheValue, addOneToTheValue));

// Task 3 work only 1 arguments
function work(a) {
    return "I do something with " + a;
}

var log = [];

function makeLogging(f, log) {
    return function () {
        var result = f.apply(this, arguments);
        log.push(arguments[0]);
        //for (var i = 0; i < arguments.length; i++) {
        //    log.push(arguments[i]);
        //}
        return result;
    }
}


work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5, 7); // 5, добавлено в log
for (var i = 0; i < log.length; i++) {
    alert('Лог: ' + log[i]); // "Лог:1", затем "Лог:5"u
}