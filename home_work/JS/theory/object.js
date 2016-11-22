/**
 * Created by kate on 12.11.16.
 */

var arr = [];
arr[0] = 11;
arr[1] = 12;
arr[3] = 13;

function fib(N) {
    return (N == 0) ? 1 : (N == 1) ? 1 : fib(N - 1) + fib(N - 2);
}

for (var i = 0; i < 5; i++) {
    console.log('Fib(' + i + ') = ' + fib(i));
}

console.log(fib(6));

function fib2(N) {
    var res = 0;
    var arr = [];
    for (var i = 0; i <= N; i++) {
        if (i == 0) {
            arr[i] = 1;
        } else if (i == 1) {
            arr[i] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        res = arr[i];
    }
    return res;
}

for (var i = 0; i < 5; i++) {
    console.log('Fib2(' + i + ') = ' + fib2(i));
}

var f = function () {
    return 1;
}

var f1 = new function () {
}
f11 = new f1();