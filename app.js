'use strict';

var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imagesArray = [];
var imageGenerated1;
var imageGenerated2;
var imageGenerated3;

// We create a global array with 0's to tally the votes
var imagesVotes = [];
for (i = 0; i < images.length; i++) { // Check how we use images.lenght property
  imagesVotes.push(0); // Add 1 zero per each image in images array
}
// Now images votes has only 0's

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
//console.log(imagesArray);

//this is for the random generator. Will choose different number each time
function randGen(){
  var rndG =  Math.floor(Math.random() * imagesArray.length);
  //console.log('random #', rndG);

  return rndG;
}


function numbGenerator () {
  imageGenerated1 = randGen();
  imageGenerated2 = randGen();
  imageGenerated3 = randGen();
  // console.log('number1', imageGenerated1);
  // console.log('number2', imageGenerated2);
  // console.log('number3', imageGenerated3);

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

// Create a random number that is different of previous image indexes
function newRandom () {
  // Initialize variables
  var isValid = false;
  var candidate = 0;
  // While candidate is not valid, create a new candidate and compare
  // the value against other images
  while (isValid == false) {
    candidate = randGen();
    isValid = candidate != imageGenerated1 &&
        candidate != imageGenerated2 &&
        candidate != imageGenerated3;
  }
  return candidate;
}

var counter = 0;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

// We already created 3 different index for each image
// Now only load the image is left :)
image1.src = 'assets/' + images[imageGenerated1] + '.jpg';
image2.src = 'assets/' + images[imageGenerated2] + '.jpg';
image3.src = 'assets/' + images[imageGenerated3] + '.jpg';

function Tracker(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
}
//this will keep a counter for each image for every click
image1.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  // Here the add 1 to the image account vote
  imagesVotes[imageGenerated1] = imagesVotes[imageGenerated1] + 1;
  console.log('Image ' + images[imageGenerated1] + ' has ' + imagesVotes[imageGenerated1] + ' votes');
  // We generate a number and update the src of the respective image object
  imageGenerated1 = newRandom();
  document.getElementById('image1').src = 'assets/' + images[imageGenerated1] + '.jpg';
  console.log('image src:', src);
  console.log('total image1 clicks:', counter);
  imageGenerated2 = newRandom();
  document.getElementById('image2').src = 'assets/' + images[imageGenerated2] + '.jpg';
  imageGenerated3 = newRandom();
  document.getElementById('image3').src = 'assets/' + images[imageGenerated3] + '.jpg';
});

//this will keep a counter for each image for every click
image2.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  imagesVotes[imageGenerated2] = imagesVotes[imageGenerated2] + 1;
  console.log('Image ' + images[imageGenerated2] + ' has ' + imagesVotes[imageGenerated2] + ' votes');
  imageGenerated2 = newRandom();
  document.getElementById('image2').src = 'assets/' + images[imageGenerated2] + '.jpg';
  console.log('image src:', src);
  console.log('total image2 clicks:', counter);
  imageGenerated1 = newRandom();
  document.getElementById('image1').src = 'assets/' + images[imageGenerated1] + '.jpg';
  imageGenerated3 = newRandom();
  document.getElementById('image3').src = 'assets/' + images[imageGenerated3] + '.jpg';

});

//this will keep a counter for each image for every click
image3.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  imagesVotes[imageGenerated3] = imagesVotes[imageGenerated3] + 1;
  console.log('Image ' + images[imageGenerated3] + ' has ' + imagesVotes[imageGenerated3] + ' votes');
  imageGenerated3 = newRandom();
  document.getElementById('image3').src = 'assets/' + images[imageGenerated3] + '.jpg';
  console.log('image src:', src);
  console.log('total image3 clicks:', counter);
  imageGenerated2 = newRandom();
  document.getElementById('image2').src = 'assets/' + images[imageGenerated2] + '.jpg';
  imageGenerated1 = newRandom();
  document.getElementById('image1').src = 'assets/' + images[imageGenerated1] + '.jpg';
});
