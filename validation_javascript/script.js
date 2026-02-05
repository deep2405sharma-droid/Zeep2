function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;

    if (name == "") {
        alert("Enter name");
        return false;
    }

    if (email == "") {
        alert("Enter email");
        return false;
    }

    if (password == "") {
        alert("Enter password");
        return false;
    }

    if (mobile == "") {
        alert("Enter mobile number");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
