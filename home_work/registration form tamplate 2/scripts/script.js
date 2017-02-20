/**
 * Created by user on 15.02.2017.
 */

function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement("span");
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}
function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}
function validateForm(form) {
    var elems = form.elements;

    resetError(elems.email.parentNode);
    if (!elems.email.value) {
        showError(elems.email.parentNode, "* Enter an email")
    }

    resetError(elems.name.parentNode);
    if (!elems.name.value) {
        showError(elems.name.parentNode, "* Enter a name")
    }

    resetError(elems.password1.parentNode);
    if (!elems.password1.value) {
        showError(elems.password1.parentNode, "* Enter a password")
    }

    resetError(elems.password2.parentNode);
    if (!elems.password2.value) {
        showError(elems.password2.parentNode, "* Enter a password")
    }
    resetError(elems.checkbox.parentNode);
    if (!elems.checkbox.value) {
        showError(elems.checkbox.parentNode, "<br>* You must agree")
    }
}

