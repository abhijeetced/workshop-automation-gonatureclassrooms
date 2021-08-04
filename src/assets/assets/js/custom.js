

$(document).ready(function(){
 
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
        let birthday = "Aug 08, 2021 18:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {  
        let now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

          headline.innerText = "Workshop Started";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
        }, 0)
    }());


  $('#AwardSlider').owlCarousel({
    loop:true,
    margin:20,
    items:3,
    nav:true,
    autoPlay: 300,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
    }
  })
  


  $('#ClientSlider').owlCarousel({
    loop:true,
    items:3,
    nav:true,
    autoPlay: 300,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
    }
  })

  

} );