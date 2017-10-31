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























// for (var i = 0; i < imagesArray.lenght; i++) {
//   imagesArray[i].addEventListener('click', function{
//
//   });
// }
