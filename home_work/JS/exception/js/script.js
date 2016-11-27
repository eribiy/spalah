var error = 0;
function foo(x, y) {
    var z = 0;
    if (x > y) {
        z = x + y;
    } else if (x < y) { // error 1
        error = -1;
    } else { // if x == y => error 2
        error = -2;
    }
    return z;
}

console.log(foo(2, 1));

var result;
result = foo(2, 1);
if (!error) {
    console.log(result);
} else if (error == -1) {
    console.log('Error no. 1');
} else if (error == -2) {
    console.log('Error no. 2');
}

function foo2(x, y) {
    var z = 0;
    if (x > y) {
        z = x + y;
    } else if (x < y) { // error 1
        z = -1;
    } else { // if x == y => error 2
        z = -2;
    }
    return z;
}

result = foo(2, 1);
if (result > 0) {
    console.log(result);
} else if (result == -1) {
    console.log('Error no. 1');
} else if (result == -2) {
    console.log('Error no. 2');
}

var a = 'string';
console.log('Index of aaa: ' + a.indexOf('aaa'));

/*
var obj = {

};

var Test = function Test() {
    var a = 1;
}
Test.show = function() {
    console.log('a' + this);
}

var test = new Test();
*/

function foo3(x, y) {
    var z = 0;
    if (x > y) {
        z = x + y;
    } else if (x < y) { // error 1
        throw new Error('Error 1', -1);
    } else { // if x == y => error 2
        throw new Error('Error 2', -2);
    }
    return z;
}

try {
    console.log(foo3(2, 1));
    console.log(foo3(2, 3));
    console.log(foo3(2, 2));
} catch (e) {
    console.log('Message: ' + e.message + '. Code: ' + e.id);
} finally {
    console.log('Finally exception');
}

