// Code goes here
var button = document.querySelector('button');
var myDropdown = document.getElementById("myDropdown");
button.addEventListener('click', function(e) {
    myDropdown.classList.toggle('show')
});


//console.dir(myDropdown);
/*
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
*/


