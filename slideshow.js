// slideshow.js
const images = ["gambar1.jpg", "gambar2.jpg", "gambar3.jpg","gambar4.jpg","gambar5.jpg","gambar6.jpg","gambar7.jpg","gambar8.jpg","gambar9.jpg","gambar10.jpg","gambar11.jpg","gambar12.jpg""gambar13.jpg","gambar14.jpg","gambar15.jpg","gambar16.jpg","gambar17.jpg"];
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
