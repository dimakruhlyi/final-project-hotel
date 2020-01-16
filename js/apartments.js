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
readTextFile("../js/data/apartmentsData.json", function(text){
  let data = JSON.parse(text);
  //console.log(data);
  showCard(data);
});

 function showCard(apartments){
  let out = '';
  //let bedsArray = localStorage.getItem('apartments-beds') ? JSON.parse(localStorage.getItem('apartments-beds')) : [];
  let bedsArray = [], imgArray = [],titleArray = [], priceArray = [];
  for(let key in apartments){
    imgArray.push(apartments[key].img);
    localStorage.setItem('apartments-img',JSON.stringify(imgArray));
    titleArray.push(apartments[key].title)
    localStorage.setItem('apartments-title',JSON.stringify(titleArray));
    priceArray.push(apartments[key].price); 
    localStorage.setItem('apartments-price',JSON.stringify(priceArray));
    bedsArray.push(apartments[key].beds);
    localStorage.setItem('apartments-beds', JSON.stringify(bedsArray));
    out+=` <div class="border">
          <div class="wrap">
            <div class="product-wrap">
              <a href=""><img src="../img/apartments-data/${apartments[key].img}" alt = "${apartments[key].title}"></a>
            </div>
            <div class="product-info">
            <h3 class="product-title">${apartments[key].title}</h3>
            <div class="price">&#8372; ${apartments[key].price}/${apartments[key].beds}-bed room</div>
            <a href="" class="add-to-cart">See More</a>
        </div>
          </div>
          
        </div>
    `;
  }
  document.getElementById('apartments-data').innerHTML = out;
 }
 