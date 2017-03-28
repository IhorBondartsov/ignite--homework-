//Task 1

function sum(num) {

    var sum = num;

    function func(num2) {
        sum += num2;
        return func;
    }

    func.toString = function () {
        return sum;
    };

    return func;
}
sum(1)(2);
sum(1)(2)(3);
sum(5)(-1)(2);
sum(6)(-1)(-2)(-3);
sum(0)(1)(2)(3)(4)(5);

// Task 2

function runString(arg, obj) {
    eval("var result = (function(){" + obj.param + " = " + arg + ";" + obj.func + ";})();");
    return result;
};

var arg = 4,                         // �������� ��� ������� runString
    obj = {
        param: 'num',                  // ��� ��������� ��� ������� � �������� func
        func: 'return Math.sqrt(num)'  // �������, ������� ������ ���� ������� �  ���������� arg
    };

runString(arg, obj);

//TAsk 3

var ladder = {
    step: 0,
    up: function() { // ����� �� ��������
        this.step++;
        return this;
    },
    down: function() { // ���� �� ��������
        this.step--;
        return this;
    },
    showStep: function() { // ������� ������� ���������
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().up().down().showStep().up().showStep().up().up().up().showStep();
