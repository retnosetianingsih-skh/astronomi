// slideshow.js
const images = ["gbr1.jpg", "gbr2.jpg", "gbr3.jpg","gbr4.jpg","gbr5.jpg","gbr6.jpg","gbr7.jpg","gbr8.jpg","gbr9.jpg","gbr10.jpg","gbr11.jpg","gbr12.jpg","gbr13.jpg","gbr14.jpg","gbr15.jpg","gbr16.jpg","gbr17.jpg"];
let index = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
  slideshow.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % images.length;
    slideshow.src = images[index];
    slideshow.style.opacity = 1;
  }, 1000);
}, 3000);
