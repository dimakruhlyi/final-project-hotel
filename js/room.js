function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  include('../js/head-menu.js');
  include('../js/slider.js');

/*------------------------------------------ Get current room ------------------------------------------*/

  function fillRoomPage(){
    let out = `
    <h1>${JSON.parse(localStorage.getItem('currentRoom')).title}</h1>
    <div class="main-slider">
     <div class="slider">
         <img class="slide slide_current" src="../img/rooms/${(JSON.parse(localStorage.getItem('currentRoom')).img_slider).split(' ')[0]}" alt="Slide 1">
         <img class="slide" src="../img/rooms/${(JSON.parse(localStorage.getItem('currentRoom')).img_slider).split(' ')[1]}" alt="Slide 2">
         <img class="slide" src="../img/rooms/${(JSON.parse(localStorage.getItem('currentRoom')).img_slider).split(' ')[2]}" alt="Slide 3">
     </div>
     <div class="arrow arrow_prev">
        <img src="../img/arrow-icons/arrow-left.jpg" alt="Arrow Left">
     </div>
     <div class="arrow arrow_next">
        <img src="../img/arrow-icons/arrow-right.jpg" alt="Arrow Right">
     </div>
 </div>
 <div class="upper-block container">
 <div class="name-block">
     <p>Sheraton Hotel, Kyiv</p>
     <p>Price: &#8372; ${JSON.parse(localStorage.getItem('currentRoom')).price}</p>
 </div>
 <div class="tool-free-block">
     <p>Toll-Free</p>
     <p>(015) 193 421</p>
 </div>
 </div>
 <div class="data-block">
     <div class="info-block">
         <h3>Features of the ${JSON.parse(localStorage.getItem('currentRoom')).title}</h3>
         <ul>
             <li><span>COUNT:</span> <span class = "count-red"> ${JSON.parse(localStorage.getItem('currentRoom')).count}</span> free rooms</li>
             <li><span>BED TYPE:</span>  ${JSON.parse(localStorage.getItem('currentRoom')).bed_type}</li>
             <li><span>CAPACITY:</span>  ${JSON.parse(localStorage.getItem('currentRoom')).capacity} person</li>
             <li><span>COMFORT:</span> ${JSON.parse(localStorage.getItem('currentRoom')).comfort}</li>
             <li><span>VIEW:</span> ${JSON.parse(localStorage.getItem('currentRoom')).view}</li>
             <li><span>TECHNOLOGY & MEDIA:</span> ${JSON.parse(localStorage.getItem('currentRoom')).technology}</li>
             <li><span>REFRESHMENT CORNER:</span> ${JSON.parse(localStorage.getItem('currentRoom')).refreshment_corner}</li>
             <li><span>ROOM ACCESSORIES:</span> ${JSON.parse(localStorage.getItem('currentRoom')).room_accessories}</li>
         </ul>
         <h3>Description</h3>
         <p>
             <span>${JSON.parse(localStorage.getItem('currentRoom')).description}</span>
             </p>
     </div>
     <div class="book-block">
         <h3>Ready to book?</h3>
        <label for="seconddate">Dates:</label>  &nbsp;&nbsp;&nbsp; <input type="date" name="firstdate" id="firstdate" value = "${getDate()}" min = "${getDate()}"> / <input type="date" name="second" id="seconddate" value = "${getNextDay()}" min = "${getNextDay()}">
        <hr>
        <label for="adultscount">Adults:</label> <input type="number" id="adultscount" value="1" min="1" max = "${JSON.parse(localStorage.getItem('currentRoom')).capacity}">
        <hr>
        <label for="secialcode">Special Code:</label> <input type="text" id="secialcode" placeholder = "if you have">
        <hr>
        <a><div class="book-button" id = "bookBtn">
            Book Now
        </div></a>
     </div>
 </div>
    
    `;
    return out;
}

document.getElementById('room-description').innerHTML = fillRoomPage();

/*------------------------------------------ Set dates to booking form ------------------------------------------*/

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = yyyy + '-' + mm + '-' + dd;
  return today;
}
function getNextDay() {
  var today = new Date();
  var dd = today.getDate()+1;
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = yyyy + '-' + mm + '-' + dd;
  return today;
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
  /*------------------------------------------Booking------------------------------------------*/
  let booking = localStorage.getItem('booking') ? JSON.parse(localStorage.getItem('booking')) : [];
  localStorage.setItem('booking', JSON.stringify(booking));

  document.getElementById('bookBtn').addEventListener('click', function(){
    if(!JSON.parse(localStorage.getItem('authorization_FLAG'))){
        alert("You must LOG IN!");
    }else{
        if(JSON.parse(localStorage.getItem('currentRoom')).count == 0){
            alert("There isn't free rooms now!");
        }else{
            
            let firstDate = document.getElementById('firstdate');
            let secondDate = document.getElementById('seconddate');
            let specialCode = document.getElementById('secialcode');
            if( firstDate.value > secondDate.value){
                alert("Incorrect DATE!")
            }else{
                if(document.getElementById('adultscount').value > JSON.parse(localStorage.getItem('currentRoom')).capacity || document.getElementById('adultscount').value < 1){
                    alert('Incorrect adults count!')
                }else{
                    let modalContent = "";

                    let adultsCount = document.getElementById('adultscount');
                    let bookingData = {
                        bookingRoomId: JSON.parse(localStorage.getItem('currentRoom')).id,
                        bookingRoomTitle: JSON.parse(localStorage.getItem('currentRoom')).title,
                        bookingDateFirst: firstDate.value,
                        bookingDateSecond: secondDate.value,
                        bookingAdultsCount: adultsCount.value,
                        bookingSpecialCode: specialCode.value,
                        bookingUser: JSON.parse(localStorage.getItem('current_user'))
                    };
                    booking.push(bookingData);
                    localStorage.setItem('booking', JSON.stringify(booking));
                    
                    let changedCount = JSON.parse(localStorage.getItem('currentRoom')).count - 1;
                    changeRoomCount(bookingData.bookingRoomId, changedCount);

                    modalContent = `
                                <div class="modal_content">
                                    <span class="close_modal_window">×</span>
                                    <h3>Booking Data</h3>
                                    <p><span>Room Title: </span>${bookingData.bookingRoomTitle}</p>
                                    <p><span>Start Date: </span>${bookingData.bookingDateFirst}</p>
                                    <p><span>Finish Date: </span>${bookingData.bookingDateSecond}</p>
                                    <p><span>Adults: </span>${bookingData.bookingAdultsCount}</p>
                                    <p><span>Special Code: </span>${bookingData.bookingSpecialCode}</p>
                                    <h3>Booking is successful. Thank you!</h3>
                                </div>`;
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
                }
            }     
        }
    }
});

function changeRoomCount(id, count){
    let tempArray = new Array();
    let tempObj = JSON.parse(localStorage.getItem('currentRoom'));
   for(let i = 0; i < JSON.parse(localStorage.getItem('room_id')).length; i++){
       if(JSON.parse(localStorage.getItem('room_id'))[i] == id){
        tempArray.push(count);
        tempObj.count = count;
        }else{
            tempArray.push(JSON.parse(localStorage.getItem('room_count'))[i]);
        }
   }
   localStorage.setItem('room_count',JSON.stringify(tempArray));
   localStorage.setItem('currentRoom', JSON.stringify(tempObj));
}
/*------------------------------------------Breadcrumbs------------------------------------------*/
let breadcrumbsData = `
<div class="breadcrumbs first-type">
<ul>
    <li><a href="../index.html">Home</a></li>
    <li><a href="../pages/apartments.html">Apartments</a></li>
    <li><a href="../pages/room.html">${JSON.parse(localStorage.getItem('currentRoom')).title}</a></li>
</ul>
</div> 
`;
document.getElementById('breadcrumbs-section').innerHTML = breadcrumbsData;