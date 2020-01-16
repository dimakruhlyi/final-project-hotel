
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
  //console.log(data);
  showGallery(data);
});

function showGallery(gallery){
  let out = '';
  for(let key in gallery){
    out+=` <div class="demo1 flex-container">
              <a href = "#${gallery[key].id}"><img src = "../img/gallery/${gallery[key].img}" at = "${gallery[key].alt}"/></a>
              <figure id = "${gallery[key].id}" class="lbox flip"><img src="../img/gallery/${gallery[key].img}"><a href=""></a></figure>
        </div>
    `;
  }

  document.getElementById('block-gallery').innerHTML = out;
}  
  
