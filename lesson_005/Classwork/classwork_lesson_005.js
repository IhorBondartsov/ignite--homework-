//Task 1

function printNumber() {
    var counter = 0;
    var timer = setInterval(function () {
        console.log(counter++)
        if (counter === 21) {
            clearTimeout(timer);
        }
    }, 100);
};
printNumber();
//Task 2
var leader = {
    name: "Василий Иванович",
    age: 35
};
userObj = JSON.stringify(leader);
alert(userObj);
userObj2 = JSON.parse(userObj);
alert(userObj2);
//Task 3
function argum(something) {
    try {
        if (arguments.length > 1) {
            throw new Error("You must use only one argument");
        }
        return something;
    }
    catch (e) {
        alert(e); // referenceError;
    }

};

console.log(argum(3,43));
console.log(argum(343));