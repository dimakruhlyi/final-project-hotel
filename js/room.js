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
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.6 451.8">
             <path d="M0,225.9c0-8.1,3.1-16.2,9.3-22.4L203.5,9.3c12.4-12.4,32.4-12.4,44.8,0c12.4,12.4,12.4,32.4,0,44.7L76.4,225.9l171.9,171.9c12.4,12.4,12.4,32.4,0,44.7c-12.4,12.4-32.4,12.4-44.7,0L9.3,248.3C3.1,242.1,0,234,0,225.9z"/>
         </svg>
     </div>
     <div class="arrow arrow_next">
         <svg class="arrow arrow_next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.6 451.8">
             <path d="M248.3,248.3L54,442.6c-12.4,12.4-32.4,12.4-44.7,0c-12.4-12.4-12.4-32.4,0-44.7l171.9-171.9L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l194.3,194.3c6.2,6.2,9.3,14.3,9.3,22.4C257.6,234,254.5,242.1,248.3,248.3z"/>
         </svg>
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
             <li><span>COUNT:</span>  ${JSON.parse(localStorage.getItem('currentRoom')).count} free rooms</li>
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
        <label for="adultscount">Adults:</label> <input type="number" id="adultscount" value="1" min="1">
        <hr>
        <label for="secialcode">Special Code:</label> <input type="text" id="secialcode">
        <hr>
        <a href="#"><div class="book-button">
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
