'use strict';

var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'god-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imagesArray = [];
var imageGenerated1;
var imageGenerated2;
var imageGenerated3;

//this will be a constructor function
function Images(name) {
  this.name = name;
  this.path = 'assets/' + name + '.jpg';
  this.generated = 0;
  this.selected = 0;
}

//this is the constructor for new images
for (var i = 0; i < images.length; i++){
  imagesArray.push(new Images(images[i]));
}
console.log(imagesArray);

//this is for the random generator. Will choose different number each time
function randGen(){
  var rndG =  Math.floor(Math.random() * imagesArray.length);
  console.log('random #', rndG);

  return rndG;
}


function numbGenerator () {
  imageGenerated1 = randGen();
  imageGenerated2 = randGen();
  imageGenerated3 = randGen();
  console.log('number1', imageGenerated1);
  console.log('number2', imageGenerated2);
  console.log('number3', imageGenerated3);

  while (imageGenerated1 === imageGenerated2) {
    console.log('re-rolling number2:' , imageGenerated2);
    imageGenerated2 = randGen();
    console.log('re-rolled number2 to', imageGenerated2);
  }
  while (imageGenerated1 === imageGenerated3 || imageGenerated2 === imageGenerated3) {
    console.log('re-rolling number3:' , imageGenerated3);
    imageGenerated3 = randGen();
    console.log('re-rolled number3 to', imageGenerated3);
  }


}
numbGenerator();



var counter = 0;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

function Tracker(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
}

image1.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('image src:', src);
  console.log('total image1 clicks:', counter);
});

image2.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('image src:', src);
  console.log('total image2 clicks:', counter);
});
image3.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('image src:', src);
  console.log('total image3 clicks:', counter);
});
