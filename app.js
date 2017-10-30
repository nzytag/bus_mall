'use strict';

var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'god-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imagesArray = [];

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
}

//randGen();
