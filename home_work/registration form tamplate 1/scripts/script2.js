/**
 * Created by user on 15.02.2017.
 */
function removeErr() {
    var err = document.querySelectorAll(".error");
    for (var i = 0; i < err.length; i++) {
        err[i].remove();
    }
}

function removeCls() {
    var cls = document.querySelectorAll(".errorInp");
    for (var j = 0; j < cls.length; j++) {
        cls[j].className = "input";
    }
}

function createErrorElement(element, message) {
        var span = document.createElement("span");
        span.className = "error";
        span.innerHTML = message;
        element.parentNode.appendChild(span);
        element.className = "input errorInp";
}

function validateForm() {
    var valid = true;

    var email = document.getElementById("email");
    var password1 = document.formReg.password1;
    var password2 = document.formReg.password2;
    var checkbox = document.formReg.checkbox;

    removeErr();
    removeCls();

    if (email.value == "") {
        createErrorElement(email, "* Enter your email");
        valid = false;
    } else {
        if (!email.value.match(/\w+@\w+\.[a-zA-Z]{2,6}/))/*(/^(\w[-\.\w]*@[a-z]+\.+[a-z]+)$/))*/ {
            createErrorElement(email, "* Email is wrong");
            valid = false;
        } else {
            email.className = "input sucsess";
        }
    }

    if (password1.value == "") {
        createErrorElement(password1, "* Enter your password");
        valid = false;
    } else {
        if (!password1.value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,15})/)) {
            var span = document.createElement("span");
            span.className = "error";
            span.innerHTML = "* The password must contain  8 - 15 characters with at least one digit, one uppercase and one lowercase letter";
            password1.parentNode.appendChild(span);
            password1.className = "input errorInp";
            valid = false;
        } else {
            password1.className = "input sucsess";
        }
    }

    if (password2.value == "") {
        var span = document.createElement("span");
        span.className = "error";
        span.innerHTML = "* Enter your password again";
        password2.parentNode.appendChild(span);
        password2.className = "input errorInp";
        valid = false;
    } else {
        if (password1.value != password2.value) {
            var span = document.createElement("span");
            span.className = "error";
            span.innerHTML = "* Passwords do not match";
            password2.parentNode.appendChild(span);
            password2.className = "input errorInp";
            valid = false;
        } else {
            if ((password1.value !== "") && (password1.value == password2.value)) {
                password2.className = "input sucsess";
            }
        }
    }

    if (!checkbox.checked) {
        var span = document.createElement("span");
        span.className = "error errCbx";
        span.innerHTML = "* Mark the checkbox";
        checkbox.parentNode.parentNode.appendChild(span);
        valid = false;
    }

    return valid;

}
