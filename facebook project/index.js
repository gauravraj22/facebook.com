function save(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var storedusername = localStorage.setItem("username", username.value);
    var storedpassword = localStorage.setItem("password", password.value);
}