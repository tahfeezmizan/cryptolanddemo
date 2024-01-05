

// var countDownDate = new Date("May 7, 2023 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + " "  ;
//   document.getElementById("demo1").innerHTML = hours + " "  ;
//   document.getElementById("demo2").innerHTML = minutes + ""  ;
//   document.getElementById("demo3").innerHTML = seconds + " "  ;


//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);



// Get the timer element
const times = document.querySelector('.times');

// Set the initial time
let days = 02;
let hours = 20;

let minutes = 40;
let seconds = 0;

// Update the timer every second
setInterval(() => {
  // Increment the seconds
  seconds++;

  // Update the minutes and seconds if necessary
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // Update the hours and minutes if necessary
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Update the timer display
  times.querySelector('.days').textContent = days.toString().padStart(2, '0');
  times.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
  times.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
  times.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
}, 1000);




// counterup


$('.counter').counterUp({
  delay: 10,
  time: 1000
});