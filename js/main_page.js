function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
include('js/smooth-scroll.js');
include('js/head-menu.js');
include('js/slider.js');

/*------------------------------------------ Check Logged In or NO------------------------------------------*/
if(JSON.parse(localStorage.getItem('authorization_FLAG'))){
    document.getElementById('menuLogin').innerHTML = '<span>Hello, </span>'+JSON.parse(localStorage.getItem('current_user')) + 
    '<br/> <span id = "logOUT">Log out</span>';
    
    document.getElementById('logOUT').addEventListener('click', function(){
     localStorage.setItem('authorization_FLAG', JSON.stringify(false));
     localStorage.setItem('current_user', JSON.stringify(" "));
     document.getElementById('menuLogin').innerHTML = '<a href="/pages/authorization.html" target = "_self" ><p>Log in</p></a>';
    });
  }
  else{
   document.getElementById('menuLogin').innerHTML = '<a href="/pages/authorization.html" target = "_self" ><p>Log in</p></a>';
  }

/*------------------------------------------ Google Maps------------------------------------------*/
//   function myMap(){
//     let pos = { lat: 50.433429, lng: 30.519608};
//     let option = {
//         center: pos,
//         zoom: 18,
//     };

//     let map =  new google.maps.Map(document.getElementById('map'), option);

//     let marker = new google.maps.Marker({
//       position: pos,
//       mapCord: map,
//       title: 'Sheraton Hotel, Kyiv, Ukraine',
//       icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//     });  
// }