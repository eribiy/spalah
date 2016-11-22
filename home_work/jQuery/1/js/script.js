$( init );
function init() {
    $('#myLink').click (sendForm);
}
function sendForm() {
    $('#myForm').submit ();
    return false;
}

