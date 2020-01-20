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
  
  addDataToLocalstorage(data);
  let count_loots = showCard(data);
  showDataPagination(count_loots);
  
});


 function showCard(apartments){
  let out = '';
  let counter = 0;
  for(let key in apartments){
    out+=`  <div data-num =${counter} class="border">
              <div class="wrap">
                <div class="product-wrap">
                  <a href=""><img src="../img/rooms/${apartments[key].img_card}" alt = "${apartments[key].title}"></a>
                </div>
                <div class="product-info">
                  <h3 class="product-title">${apartments[key].title}</h3>
                  <div class="price">&#8372; ${apartments[key].price}/${apartments[key].capacity}-person <br/> <span class = "count-red">${apartments[key].count}</span> free rooms </div>
                  <a class="add-to-cart"  target = "_self" onclick = 'chooseCurrentRoom(${JSON.stringify(apartments[key])}, ${apartments[key].id})'>See More</a>
                </div>
              </div> 
            </div> `;
    counter++;
  }
 
  document.getElementById('apartments-data').innerHTML = out;
  return counter;
 }
  
/*------------------------------------------ Find and add current room to localstorage ------------------------------------------*/
function chooseCurrentRoom(object,roomId) {
  for(let i = 0; i < JSON.parse(localStorage.getItem('room_id')).length; i++){
    if(JSON.parse(localStorage.getItem("room_id"))[i] == roomId)
    {
      localStorage.setItem("currentRoom",JSON.stringify(object));
      window.location.href = "../pages/room.html";
    }
  }
}

/*------------------------------------------ Pagination ------------------------------------------*/
function showDataPagination(count_loots){
    let count = count_loots; 
    let cnt = 6; 
    let cnt_page = Math.ceil(count / cnt); 

    //show pages list
    let paginator = document.querySelector(".pagination-block");
    let page = "";
    for (let i = 0; i < cnt_page; i++) {
      page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
    }
    paginator.innerHTML = page;

    //show data loots
    let div_num = document.querySelectorAll(".border");
    for (let i = 0; i < div_num.length; i++) {
      if (i < cnt) {
        div_num[i].style.display = "block";
      }
    }

    let main_page = document.getElementById("page1");
    main_page.classList.add("paginator_active");

  //next page with loots
  document.getElementById('pagination-block').onclick =  function (event) {
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
}
/*------------------------------------------ Add data to localstorage ------------------------------------------*/
function addDataToLocalstorage(apartments){
  let idArray = [], capacityArray = [], imgCardArray = [],titleArray = [], priceArray = [], countArray = []
  bedTypeArray = [], imgSliderArray = [], comfortArray = [], viewArray = [], technologyArray = [],
  refreshmentArray = [], accessoriesArray = [], descriptionArray = [];
  for(let key in apartments){
      idArray.push(apartments[key].id)
      localStorage.setItem('room_id',JSON.stringify(idArray));

      titleArray.push(apartments[key].title)
      localStorage.setItem('room_title',JSON.stringify(titleArray));

      countArray.push(apartments[key].count);
      localStorage.setItem('room_count', JSON.stringify(countArray));

      priceArray.push(apartments[key].price); 
      localStorage.setItem('room_price',JSON.stringify(priceArray));

      capacityArray.push(apartments[key].capacity);
      localStorage.setItem('room_capacity', JSON.stringify(capacityArray));

      bedTypeArray.push(apartments[key].bed_type);
      localStorage.setItem('room_bedType', JSON.stringify(bedTypeArray));
      
      imgCardArray.push(apartments[key].img_card);
      localStorage.setItem('room_imgCard',JSON.stringify(imgCardArray));
 
      imgSliderArray.push(apartments[key].img_slider);
      localStorage.setItem('room_imgSlider',JSON.stringify(imgSliderArray));

      comfortArray.push(apartments[key].comfort);
      localStorage.setItem('room_comfort', JSON.stringify(comfortArray));

      viewArray.push(apartments[key].view);
      localStorage.setItem('room_view', JSON.stringify(viewArray));

      technologyArray.push(apartments[key].technology);
      localStorage.setItem('room_technology', JSON.stringify(technologyArray));

      refreshmentArray.push(apartments[key].refreshment_corner);
      localStorage.setItem('room_refreshmentCorner', JSON.stringify(refreshmentArray));

      accessoriesArray.push(apartments[key].room_accessories);
      localStorage.setItem('room_accessories', JSON.stringify(accessoriesArray));

      descriptionArray.push(apartments[key].description);
      localStorage.setItem('room_description', JSON.stringify(descriptionArray));
  }
}
