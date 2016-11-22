var userName = prompt("Enter your name", "");
var check = isNaN(userName);
if (check) {
    alert (userName);
} else {
    alert ("fail");
}
