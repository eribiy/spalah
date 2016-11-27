// Code goes here

function extention(string) {
    var res = string.match(/.*\.(.*?)$/i);
    if (res == null) {
        //throw new Error('There is no extension');
    }
    return res;
/*
    if (string.match(/[a-z0-9]+$/ig) == null) {
        throw new Error('There is no extension');
    } else if (string.match(/\./ig) == null) {
        throw new Error('There is no extension');
    } else {
        return string.match(/[a-z0-9]+$/ig);
    }
*/
}

console.log(extention('a.b'));
console.log(extention('a.b.c'));
console.log(extention('a.'));
console.log(extention('.a'));
console.log(extention('...'));
console.log(extention('a'));

