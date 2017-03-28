//Task 1
function sumArgument() {
    var argum = arguments;
    var reduce = [].reduce;
    var counter = function(sum, current) {
        return sum + current;
    };
    var sum = reduce.call(argum, counter, 0);
    return sum;
}

sumArgument(158, 2);

//Task 2
var user = {
    firstName: "Вася",
    sayHi: function() {
        alert( this.firstName );
    }
};
var f = user.sayHi().bind(user);
f();


//Task 3
function joinArgs() {
    arguments.join = [].join; // одолжили метод (1)
    var argStr = arguments.join('*'); // (2)
    alert( argStr ); // сработает и выведет 1:2:3
}

joinArgs(1,2,3) // 1*2*3
joinArgs('hello', 'world', '!') // hello*world*!