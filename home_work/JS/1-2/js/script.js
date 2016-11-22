var a = 1;
var b = 2, c = 0;

c = a + b;
document.writeln(c);

c = a;
a = b;
b = c;

document.writeln(a);
document.writeln(b);

a = a^b;
b = b^a;
a = a^b;

document.writeln(a);
document.writeln(b);

var i = 0;
do {
    document.writeln(i);
    i++; // увеличиваем i на 1
} while (i < 10);