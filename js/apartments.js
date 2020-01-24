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
 /*>>>>>>>>>>>>>>>>>>>>>>>>>>> Set loading FLag */
  let loadDataFlag = localStorage.getItem('loadDataFlag') ? JSON.parse(localStorage.getItem('loadDataFlag')) : true;
  localStorage.setItem('loadDataFlag', JSON.stringify(loadDataFlag));
  if(JSON.parse(localStorage.getItem('loadDataFlag'))){
    addDataToLocalstorage(data);
    localStorage.setItem('loadDataFlag',false);
  }
/*>>>>>>>>>>>>>>>>>>>>>>>>>>> Show Cards */
  let count_loots = showCard(data);
  showDataPagination(count_loots);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>> Select Sorting */
  let selectSorting = document.getElementById("sorting");
  selectSorting.addEventListener('change', function() {
    let selectedOption = selectSorting.options[selectSorting.selectedIndex].value;
    if (selectedOption == 'low') {
      showCard(sortLow(data));
      showDataPagination(count_loots);
    }
    if (selectedOption == 'hight') {
      showCard(sortHight(data));
      showDataPagination(count_loots);
    }
    if (selectedOption == 'default') {
      showCard(data);
      showDataPagination(count_loots);
    }
  });
   
});

 function showCard(apartments){
  let out = '';
  let counter = 0;
  for(let key in apartments){
    out+=`  <div data-num =${counter} class="border">
              <div class="wrap">
                <div class="product-wrap">
                  <a href=""><img src="../img/rooms/${apartments[key].img_slider.split(' ')[0]}" alt = "${apartments[key].title}"></a>
                </div>
                <div class="product-info">
                  <h3 class="product-title">${apartments[key].title}</h3>
                  <div class="price">&#8372;<span class = "price-red">${apartments[key].price}</span> / ${apartments[key].capacity}-person</div>
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
      let tempCurrentObj = JSON.parse(localStorage.getItem('currentRoom'));
      tempCurrentObj.count = JSON.parse(localStorage.getItem('room_count'))[i];
      localStorage.setItem("currentRoom",JSON.stringify(tempCurrentObj));
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
  let idArray = [], capacityArray = [],titleArray = [], priceArray = [], countArray = [], roomTypeAray = [],
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

      roomTypeAray.push(apartments[key].room_type);
      localStorage.setItem('room_type', JSON.stringify(roomTypeAray));

      bedTypeArray.push(apartments[key].bed_type);
      localStorage.setItem('room_bedType', JSON.stringify(bedTypeArray));
 
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
/*------------------------------------------ Sorting ------------------------------------------*/
function sortLow(data){
  let tempArray = new Array();
  let i = 0;
  for(let key in data){
    tempArray.push(data[key]);
    i++;
  }
  sortLowFunction(tempArray);
  return tempArray;
}

function sortHight(data){
  let tempArray = new Array();
  for(let key in data){
    tempArray.push(data[key]);
  }
  sortHightFunction(tempArray);
  return tempArray;
}

function sortLowFunction(arr) {
  arr.sort((a, b) => a.price > b.price ? 1 : -1);
}
function sortHightFunction(arr) {
  arr.sort((a, b) => a.price < b.price ? 1 : -1);
}
