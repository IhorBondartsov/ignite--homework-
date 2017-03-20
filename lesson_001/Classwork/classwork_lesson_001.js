//Task 1
var user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete  user.name;

//Task 2
var emptyObj = {};
var notEmptiObj = {
    empty: false
};

function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
};

console.log(isEmpty(emptyObj));
console.log(isEmpty(notEmptiObj));

//Task 3
var numbers = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];
var maxValue = Math.max.apply(window, numbers);
var minValue = Math.min.apply(window, numbers);
var evenAndPositive = numbers.filter(function (number) {
    return number > 0 && number % 2 === 0;
});
document.write("Max = " + maxValue + "\nMin = "+minValue);
document.write("<hr />");
document.write(evenAndPositive);

