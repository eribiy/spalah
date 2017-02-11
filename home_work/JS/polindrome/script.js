/**
 * Created by kate on 07.02.17.
 */

var maxPalindrome = 0;
var maxI = 0, maxJ = 0;

for (var i = 999, x = 0; i >= 100; i--, x++) {
    for (var j = 999 - x; j >= 100; j--) {
        res = i * j;
        rev = String(res).split("").reverse().join("");
        if (res == rev) {
            console.log(i, j, res);
            if (res > maxPalindrome) {
                maxPalindrome = res;
                maxI = i;
                maxJ = j;
            }
        }
    }
}
console.log(maxPalindrome + " = " + maxI + " * " + maxJ);