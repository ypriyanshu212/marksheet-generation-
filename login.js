function login() {
    let Email = document.getElementById('Lemail').value;
    let Pass = document.getElementById('pass').value;
    let REmail = localStorage.getItem('userEmail');
    let RPass = localStorage.getItem('userPass');
    if (REmail === Email && RPass === Pass) {
        alert("login, successfully")
        window.open("marksheet.html")
    }
    else {
        alert("invalid creds")
    }
}
function show_btn() {
    let input = document.getElementById('pass');
    if (input.type === "password") {
        input.type = "text";
        document.getElementById('pass-hide').style.display = 'none';
        document.getElementById('pass-show').style.display = 'block';
    }
    else {
        input.type = "password";
        document.getElementById('pass-hide').style.display = 'block';
        document.getElementById('pass-show').style.display = 'none';
    }
}