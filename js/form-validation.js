// Form Validation
function validateForm() {
    var x = document.forms["myForm"]["email"].value;

    if (x == "") {
        alert("Email must be filled out, search again.");
        return false;
    }
    else if (x == "jonsmith@example.com" || x == "janesmith@example.com" || x == "doesmith@example.com") {
        return true;
    }
    else {
        alert("Correct Email must be filled out, search again.");
        return false;
    }
}

