function checkData() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let getEmail = localStorage.getItem("userEmail")
    let getPassword = localStorage.getItem("userPassword")

    if (email == getEmail) {
        if (password == getPassword) {
            alert("Login Successful");
        } else {
            alert("Login Failed, Incorrect password");
        }
    } else {
        alert("Login Failed, Incorrect email");
    }
}