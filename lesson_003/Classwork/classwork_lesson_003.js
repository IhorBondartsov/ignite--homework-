// Task 1
/*
 Потому что при при первом сравнении сравниваються объекты,
 а они равны друг другу только тогда когда это один и тот же
 объект в другом случае они не равны. Но в логичиском контексте
 объект всегда = true. Никаких преобразований не происходит.

 Во втором сравнение при считывании кода интерпритатором
 изначально исчесляються оба операнда. Первый есть строковое
 представление так как он сравниваеться с примитивом, а это
 в своб очередь приводит к числовому преобразованию.Если у объекта нету
 метода числового преобразования то он приводиться к строке.
 Второй приводиться к логическому выражению из за логического не(!).
 Преобразования 1) логическое - 2) к страке - 3) к числу
 */

// Task 2

function Calculator() {

    this.read = function () {
        this.firstOperand = validateNum("Please entered first number");
        this.seconOperand = validateNum("Please entered second number");
    };

    this.sum = function () {
        return +this.firstOperand + +this.seconOperand;
    };

    this.mul = function () {
        return this.firstOperand * this.seconOperand;
    };


};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

validateNum = function (message) {
    var num = prompt(message);
    while (!isNumeric(+num)) {
        num = prompt("Ths is not a number.\nPlease try again!!!");
    }
    return num;
};


var calculator = new Calculator();

calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());


//Task 3
function Summator(){
    this.sum = function(a,b){
        return (+a)+(+b);
    };
    this.run = function(){
        var a = validateNum("Please entered first number");
        var b = validateNum("Please entered second number");
        alert("Summ = " +this.sum(a,b));
    }
}
var obj = new Summator().run();
