var userName = prompt("Enter your name", "");
var check;
while (!(check = isNaN(userName))) {
    //alert("fail");
    userName = prompt("Enter your name", "");
}
alert(userName);
