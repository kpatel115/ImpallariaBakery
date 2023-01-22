var i = 0;
var images = [];
var time = 3000;

images[0] = '/photos/bakery.jpg';
images[1] = '/photos/coffee.jpg';
images[2] = '/photos/deli.jpg';

// Slideshow
function changeImage(){
  let slide = document.getElementById("slides");
  slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", time);
}
window.onload = changeImage;