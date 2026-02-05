function validate() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value.trim();

    // Name validation
    if (name === "") {
        alert("Enter name");
        return false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email");
        return false;
    }

    // Password validation (min 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // Mobile validation (10 digits only)
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Enter a valid 10-digit mobile number");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

