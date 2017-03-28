/**
 * Created by Игорь on 20.03.2017.
 */

// Task 1

if ([].indexOf) {
    var find = function (array, value) {
        return array.indexOf(value);
    }
} else {
    var find = function (array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    }
}
;

arr = ["test", 2, 1.5, false];
document.write(find(arr, "test"));
document.write("<hr />");
document.write(find(arr, 2));
document.write("<hr />");
document.write(find(arr, 1.5));
document.write("<hr />");
document.write(find(arr, "qwe"));

// Task 2

function sortBubble(data) {
    var tmp;
    for (var i = data.length - 1; i > 0; i--) {
        var counter = 0;
        for (var j = 0; j < i; j++) {
            if (data[j] > data[j + 1]) {
                tmp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = tmp;
                counter++;
            }
        }
        if (counter == 0) {
            break;
        }
    }
    return data;
};

var arr = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6];

document.write("<hr />");
document.write(sortBubble(arr));


// Сортировка с помощью метода sort
document.write("<hr />");
document.write(arr.sort(function compareNumeric(a, b) {
    return b - a;
}));

// Task 3

function bigToSmall(arrays) {
    var newArray = arrays.reduce(function (flat, current) {
        return flat.concat(current);
    }, []);
    newArray.sort(function compareNumeric(a, b) {
        return a - b;
    });
    return newArray.join(">")
};
document.write("<hr />");
document.write(bigToSmall([[1, 2], [3, 4], [5, 6]]));
document.write("<hr />");
document.write(bigToSmall([[1, 3, 5], [2, 4, 6]]));
document.write("<hr />");
document.write(bigToSmall([[1, 1], [1], [1, 1]]));