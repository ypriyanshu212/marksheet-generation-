function signup(){
    alert("working");

    let Name = document.getElementById('Sname').value;
    let Email = document.getElementById('Semail').value;
    let Pass = document.getElementById('Spass').value;
    let Num = document.getElementById('Snum').value;

    localStorage.setItem('userName', Name);
    localStorage.setItem('userEmail', Email);
    localStorage.setItem('userPass', Pass);
    localStorage.setItem('userNum', Num);
}
// function show_btn() {
//     let input = document.getElementById('Spass');
//     if (input.type === "password") {
//         input.type = "text";
//         document.getElementById('pass-hide').style.display = 'none';
//         document.getElementById('pass-show').style.display = 'block';
//     }
//     else {
//         input.type = "password";
//         document.getElementById('pass-hide').style.display = 'block';
//         document.getElementById('pass-show').style.display = 'none';
//     }
// }