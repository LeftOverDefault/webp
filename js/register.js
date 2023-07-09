function addData(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    localStorage.setItem("userName", username);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
}