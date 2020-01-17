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
  showDataPagination();
  
  
});

 function showCard(apartments){
  let out = '';
  let counter = 1;
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
    out+=` <div data-num =${counter} class="border">
          <div class="wrap">
            <div class="product-wrap">
              <a href=""><img src="../img/apartments-data/${apartments[key].img}" alt = "${apartments[key].title}"></a>
            </div>
            <div class="product-info">
            <h3 class="product-title">${apartments[key].title}</h3>
            <div class="price">&#8372; ${apartments[key].price}/${apartments[key].beds}-bed room</div>
            <a href="../pages/room.html" class="add-to-cart" target = "_self">See More</a>
        </div>
          </div>
          
        </div>
    `;
    counter++;
  }
  document.getElementById('apartments-data').innerHTML = out;
 }
 

/*------------------------------------------ Pagination ------------------------------------------*/
function showDataPagination(){
  let count = 6; //всего записей
  let cnt = 2; //сколько отображаем сначала
  let cnt_page = Math.ceil(count / cnt); //кол-во страниц

  //выводим список страниц
  let paginator = document.querySelector(".pagination-block");
  let page = "";
  for (let i = 0; i < cnt_page; i++) {
    page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
  }
  paginator.innerHTML = page;

  //выводим первые записи {cnt}
  let div_num = document.querySelectorAll(".border");
  for (let i = 0; i < div_num.length; i++) {
    if (i < cnt) {
      div_num[i].style.display = "block";
    }
  }

  let main_page = document.getElementById("page1");
  main_page.classList.add("paginator_active");
}
//листаем
function pagination(event) {
  let e = event || window.event;
  let target = e.target;
  let id = target.id;
  
  if (target.tagName.toLowerCase() != "span") return;
  
  let num_ = id.substr(4);
  let data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  let j = 0;
  for (let i = 0; i < div_num.length; i++) {
    let data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";

  }
  for (let i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
    j++;
  }
}

