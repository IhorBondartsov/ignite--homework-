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



//Task 3
