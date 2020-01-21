function include(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
  }
  include('../js/head-menu.js');
  include('../js/smooth-scroll.js');
/*------------------------------------------ Show/Hide form ------------------------------------------*/
function showRegisterForm(){
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
};
function showLoginForm(){
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
   
};
/*------------------------------------------ Registration ------------------------------------------*/
let registerLogin = document.getElementById('registerLogin');
let registerPS = document.getElementById('registerPS');
let registerMail = document.getElementById('registerMail');
let userLogin = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : [];
let userPS = localStorage.getItem('userPS') ? JSON.parse(localStorage.getItem('userPS')) : [];
let userMail = localStorage.getItem('userMail') ? JSON.parse(localStorage.getItem('userMail')) : [];
localStorage.setItem('userLogin',JSON.stringify(userLogin));
localStorage.setItem('userPS',JSON.stringify(userPS)); 
localStorage.setItem('userMail',JSON.stringify(userMail));

document.getElementById('createBtn').addEventListener('click',function(e){
   e.preventDefault();

   if(checkLogin(registerLogin.value)){
    userLogin.push(registerLogin.value);
    localStorage.setItem('userLogin',JSON.stringify(userLogin));
    userPS.push(registerPS.value);
    localStorage.setItem('userPS',JSON.stringify(userPS));
    userMail.push(registerMail.value);
    localStorage.setItem('userMail',JSON.stringify(userMail));
    alert('Registered!');
   }else{
    alert("This login have already exist!")
   }
 });

 function checkLogin(login){
   for(let i = 0; i < JSON.parse(localStorage.getItem('userLogin')).length; i++){
     if(JSON.parse(localStorage.getItem('userLogin'))[i] == login){
      return false;
     }
   }
   return true;
 }
 /*------------------------------------------ Authorization ------------------------------------------*/
 let login = document.getElementById('Login');
 let password = document.getElementById('PS');
 document.getElementById('loginBtn').addEventListener('click', function(){
    authorization(login.value, password.value);
 });

 function authorization(login, ps){
  localStorage.setItem('authorization_FLAG', JSON.stringify(false));
  let flag1 = true, flag2 = true;
  for(let i = 0; i < JSON.parse(localStorage.getItem('userLogin')).length; i++){
    if(JSON.parse(localStorage.getItem('userLogin'))[i] == login){
     flag1 = false;
     for(let j = 0; j < JSON.parse(localStorage.getItem('userPS')).length; j++){
       if(i == j && JSON.parse(localStorage.getItem('userPS'))[j] == ps){
         flag2 = false;
         localStorage.setItem('current_user', JSON.stringify(JSON.parse(localStorage.getItem('userLogin'))[i]));
         window.location.href = "../pages/apartments.html";
        }
      }
    }
  }
  if(flag1) alert('Incorrect LOGIN!');
  else if(flag2) alert('Incorrect PASSWORD!');
       else{
         alert("You are logged in!");
         localStorage.setItem('authorization_FLAG', JSON.stringify(true));
       }
 }


/*------------------------------------------ Check Logged In or NO------------------------------------------*/
 if(JSON.parse(localStorage.getItem('authorization_FLAG'))){
   document.getElementById('menuLogin').innerHTML = '<span>Hello, </span>'+JSON.parse(localStorage.getItem('current_user')) + 
   '<br/> <span id = "logOUT">Log out</span>';
   
   document.getElementById('logOUT').addEventListener('click', function(){
    localStorage.setItem('authorization_FLAG', JSON.stringify(false));
    localStorage.setItem('current_user', JSON.stringify(" "));
    document.getElementById('menuLogin').innerHTML = '<a href="../pages/authorization.html" target = "_self" ><p>Log in</p></a>';
   });
 }
 else{
  document.getElementById('menuLogin').innerHTML = '<a href="../pages/authorization.html" target = "_self" ><p>Log in</p></a>';
 }
