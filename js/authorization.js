/*------------------------------------------ Smooth Scroll ------------------------------------------*/
function smoothScroll(targ, duration){
	let target = document.querySelector(targ);
	let targetPosition = target.getBoundingClientRect().top;
	let startPosition = window.pageYOffset;
	let distance = targetPosition - startPosition;
	let startTime = null;

	function animation(currentTime){
		if(startTime === null) startTime = currentTime;
		let timeElapsed = currentTime - startTime;
		let run = ease(timeElapsed,startPosition, distance, duration);
		window.scroll(0,run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}
	function ease(t, b, c, d){
		return c * Math.sin(t/d * (Math.PI/2)) + b; 
	}
	
	requestAnimationFrame(animation);
}
let linkAbout = document.querySelector('.menu_about');
linkAbout.addEventListener('click', function(){
	smoothScroll('#about', 1000);
});
/*------------------------------------------ Head Menu ------------------------------------------*/
function adaptiveMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
/*------------------------------------------ Show/Hide form ------------------------------------------*/
function showRegisterForm(){
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
};
function showLoginForm(){
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
   
};

 