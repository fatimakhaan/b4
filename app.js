import React from 'react';
import './style.css';

function App() {


  return (
    <div className="App">

<nav class="navbar navbar-expand-lg navbar-light" style= "background-color:whitesmoke;">
    
    
    <nav class="navbar navbar-light bg-light">
   <a class="navbar-brand" href="#">
   <img src="/images/logo.jpeg" width="150" height="100" class="d-inline-block align-top" alt="" />
  </a>
   </nav>
   <div class="container-fluid  justify-content-end">
    <nav class="navbar navbar-expand-sm bg-light  ">
  <ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link  " href="#">Home</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  " href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  " href="#">Sign In</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  " href="#">Sign Up</a>
  </li>
  </ul>
  
  </nav>
  </div>
  </nav>
  
      
  
  
  <div id="text"  class="container "> 
  <div class="image-size">
    <img src="/images/nursery1.jpeg" alt="" style="width: 1000px;   height: 550px;"/>
  </div>
    <div class="centered"><h1>Welcome to Mazhar Green Fields</h1></div>
  </div>
  
  
  
  
  <div class="heading">
  <h1 style="color: green; text-align: center; font-weight: bold;">SERVICES</h1>
  <div class="row">
  <div class="column">
  <div class="card">
  
    <img src="/images/planting.jpeg" alt="Jane" style="width:100%;  height: 300px;"/>
    <div class="container">
      <h2>planting</h2>
      <p class="title">CEO &amp; Founder</p>
      <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      <p>example@example.com</p>
      <p><button class="button">Book now</button></p>
    </div>
  </div>
  </div>
  
  <div class="column">
  <div class="card">
    <img src="/images/shed.jpeg" alt="Mike" style="width:100%;  height: 300px;"/>
    <div class="container">
      <h2>Mike Ross</h2>
      <p class="title">Art Director</p>
      <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      <p>example@example.com</p>
      <p><button class="button">Book now</button></p>
    </div>
  </div>
  </div>
  
  <div class="column">
  <div class="card">
    <img src="/images/plants.jpeg" alt="John" style="width:100%;  height: 300px;"/>
    <div class="container">
      <h2>John Doe</h2>
      <p class="title">Designer</p>
      <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      <p>example@example.com</p>
      <p><button class="button">Book now</button></p>
    </div>
  </div>
  </div>
  </div>
  </div>
  
  
  
  <div class="footer">
  <div class="d-flex">
  <div   class="p-2  flex-fill">
  <h1>Contact</h1>
  <p>Mazhar Green Fields</p>
  <p>3km, depalpur bypass</p> 
  <p>moraan wala baagh,Kasur</p>
  
  </div>
  <div class="p-2  flex-fill">
  <p>PHone no: 0300-6597734</p>
  <p> <a href="mailto:fatimaalikhan1167@gmail.com">fatimaalikhan1167@gmail.com </a></p>
  <p>Book now</p>
  <i class="fa fa-facebook"></i>
  <i class="fa fa-instagram"></i>
  <i class="fa fa-youtube"></i>
  
  </div>
  <div class="p-2  flex-fill">Flex item 3</div>
  </div>
  </div>




          </div>
  );
}

export default App;





window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
