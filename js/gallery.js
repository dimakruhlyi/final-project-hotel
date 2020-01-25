
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include('../js/head-menu.js');
/*------------------------------------------ Fill Data ------------------------------------------*/
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}
readTextFile("../js/data/galleryData.json", function(text){
  let data = JSON.parse(text);
  showGallery(data);
});

function showGallery(gallery){
  let out = '';
  for(let key in gallery){
    out+=` <div class="demo1 flex-container">
            <img src = "../img/gallery/${gallery[key].img}" at = "${gallery[key].alt}" id = "${gallery[key].id}"/>
        </div>
    `;
   
  }
  document.getElementById('block-gallery').innerHTML = out;
  for(let key in gallery){
    document.getElementById(`${gallery[key].id}`).onclick = showModal(gallery[key].img,gallery[key].id);
  }
}
function showModal(img, id){
  let modalContent = '';
  modalContent = `
  <div class="modal_content">
    <span class="close_modal_window"></span>
    <img src = "../img/gallery/${img}" />
  </div>
  `;
  document.getElementById(`${id}`).addEventListener('click', function(){
    document.getElementById('my_modal').innerHTML = modalContent;
    let modal = document.getElementById("my_modal");
    let span = document.getElementsByClassName("close_modal_window")[0];

    modal.style.display = "block";
    span.onclick =  function () { modal.style.display = "none"; };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  });
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