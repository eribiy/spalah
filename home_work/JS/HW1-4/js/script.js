var check;
var userName;
do {
    userName = prompt("Enter your name", "");
    check = !isNaN(userName);
    if (check) {
        alert("fail");
    }
} while (check);
alert(userName);
