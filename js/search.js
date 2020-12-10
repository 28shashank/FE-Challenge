//Create a localStorage name/value pair with name="textValue" and value="email"
function parsevalues(){
    var email = document.getElementById('serachText').value;
    localStorage.setItem("textValue", email);
    return false;
}