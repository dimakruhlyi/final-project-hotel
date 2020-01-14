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

 