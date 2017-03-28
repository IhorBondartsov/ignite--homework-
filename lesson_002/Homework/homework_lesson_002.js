/**
 * Created by Игорь on 23.03.2017.
 */
// Task 1


function sum() {
    var summ = 0;
    return function (number) {
        return summ = summ + number;
    };
};


var count = sum();

console.log(count(10));
console.log(count(100));
console.log(count(1));

// Task 2


function strCount(object) {
    var sum = 0;
    for (var key in object) {
        if (typeof object != 'string' && typeof object[key] == 'string') {
            sum++;
        } else if (object[key] != null && typeof object[key] == 'object') {
            sum = sum + strCount(object[key]);
        }
    }
    return sum;
}

var sumStr = strCount();

console.log(sumStr);


//Task 3


function add(x) {
    return function (y) {
        return x = x + y;
    }
}

console.log(add(3)(4));
