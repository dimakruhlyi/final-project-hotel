function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  include('../js/head-menu.js');
/*------------------------------------------ Fill Data ------------------------------------------*/
let apartments = {
  "1":{
    "img": "apartments-1.jpg",
    "title": "Apartments 1",
    'beds':2,
    "price": 1999,
  },
  "2":{
    "img": "apartments-2.jpg",
    "title": "Apartments 2",
    'beds':1,
    "price": 2000,
  },
  "3":{
    "img": "apartments-3.jpg",
    "title": "Apartments 3",
    'beds':2,
    "price": 3000,
  },
  "4":{
    "img": "apartments-4.jpg",
    "title": "Apartments 4",
    'beds':3,
    "price": 4000,
  },
  "5":{
    "img": "apartments-5.jpg",
    "title": "Apartments 5",
    'beds':3,
    "price": 3500,
  },
  "6":{
    "img": "apartments-6.jpg",
    "title": "Apartments 6",
    'beds':2,
    "price": 2500,
  },
};

  let out = '';

  for(let key in apartments){
    // localStorage.setItem('apartments-img',apartments[key].img);
    // localStorage.setItem('apartments-title',apartments[key].title);
    // localStorage.setItem('apartments-price',apartments[key].price);
    // localStorage.setItem('apartments-beds',apartments[key].beds);
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
  //localStorage.setItem('apartment_data', apartments[1].img);