// Form Validation
function validateForm() {
    var x = document.forms["myForm"]["email"].value;

    if (x == "") {
        let errLabel = document.getElementById('serachText');
        errLabel.classList.add("error");
        document.getElementById("floatingLabel").style.display = "none";
        document.getElementById('error-email').innerHTML = "Email must be filled out, please search again";
        return false;
    }
    else if (x == "jonsmith@example.com" || x == "janesmith@example.com" || x == "doesmith@example.com") {
        return true;
    }
    else {
        let errLabel = document.getElementById('serachText');
        errLabel.classList.add("error");
        document.getElementById("floatingLabel").style.display = "none";
        document.getElementById('error-email').innerHTML = "Please add a valid email address";
        return false;
    }
}

