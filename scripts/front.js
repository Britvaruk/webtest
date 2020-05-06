function hello() {
   document.getElementById('lk').innerHTML = "иди нахуй";
}
function getReqistration(){
   document.getElementById('registration').hidden = false;
}
function takeAccount() {
   var data = {
      login: document.getElementById("login").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
      email: document.getElementById("email").value
   }
   if(data.password == data.confirmPassword){
      console.log(data);
   }
   else {
      console.log("Пароли не совпадают");
   }



}
