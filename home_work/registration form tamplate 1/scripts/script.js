/**
 * Created by user on 15.02.2017.
 */
function validateForm() {
    var valid = true;
    var email = document.formReg.email;
    if (email.value == "") {
        var span = document.createElement("span");
        span.className = "error";
        span.innerHTML = "fill the input";
        email.parentNode.appendChild(span);
        valid = false;
        email.className = "input errorInp"
    }
    return valid;

}
