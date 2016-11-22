var check;
var userName;
do {
    userName = prompt("Enter your name", "");
    // var stringObject = userName.toString();
    // check = stringObject.match;
    check = userName.toString().match(/[a-zA-Z]+/);
    if (!check) {
        alert("Fail");
    }
} while (!check);
alert(userName);
