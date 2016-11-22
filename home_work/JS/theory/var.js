/**
 * Created by kate on 12.11.16.
 */

var a = 5; // integer
var b = 3.14; // float

var c = a + b;
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

var d = new Number(5);
console.log(d, typeof d);

var s = "String";
console.log(s, typeof s);

var ss = new String("String");
console.log(ss, typeof ss);

var bl = false;
console.log(bl, typeof bl);

var blobj = new Boolean(true);
console.log(blobj, typeof blobj);

// operator = + - * / % ++ -- += -= *= /= == === ! & | && || ^ ?: != !== < > <= >=

a = 5 + 1;
b = Math.abs(-a);

var l1, l2, l3;
for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
        l1 = new Boolean(i);
        l2 = new Boolean(j);
        l3 = l1 & l2;
        console.log(l1.valueOf(), l2.valueOf(), l3.valueOf());
    }
}

for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
        l1 = new Boolean(i);
        l2 = new Boolean(j);
        l3 = l1 | l2;
        console.log(l1.valueOf(), l2.valueOf(), l3.valueOf());
    }
}

for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
        l1 = new Boolean(i);
        l2 = new Boolean(j);
        l3 = l1 ^ l2;
        console.log(l1.valueOf(), l2.valueOf(), l3.valueOf());
    }
}

function loginmagick(func) {
    for (var i = 0; i <= 1; i++) {
        for (var j = 0; j <= 1; j++) {
            l1 = i;
            l2 = j;
            l3 = func(l1.valueOf(), l2.valueOf());
            console.log(l1.valueOf(), l2.valueOf(), l3.valueOf());
        }
    }
}

var logic_function_and = function(a, b) {
    return a & b;
}
var logic_function_or = function(a, b) {
    return a | b;
}
var logic_function_xor = function(a, b) {
    return a ^ b;
}
console.log("function");
//loginmagick(logic_function_and);
//loginmagick(logic_function_or);
//loginmagick(logic_function_xor);
/*

loginmagick(function(a, b) {
    return !(a & b);
});

loginmagick(function(a, b) {
    return !a | !b;
});

loginmagick(function(a, b) {
    return !(a | b);
})
loginmagick(function(a, b) {
    return !a & !b;
})

*/

