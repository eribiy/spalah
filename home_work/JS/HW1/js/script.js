var userName = prompt("Enter your name", "");
var check = isNaN(userName);
if (check == false) {
    alert ("fail");
} else {
    alert (userName);
}
