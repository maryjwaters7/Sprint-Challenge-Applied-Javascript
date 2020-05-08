/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function make(selector) {
  return document.createElement(selector);
};

const caroEntry = document.querySelector('.carousel-container')
console.log(caroEntry)

imgArray= [['./assets/carousel/mountains.jpeg','mountains'],
['./assets/carousel/computer.jpeg','computer'],
['./assets/carousel/trees.jpeg','trees'],
['./assets/carousel/turntable.jpeg','turntable']]

  addCaro = () => {
  //elements
  carousel = make('div');
  btnLeft = make('i');
  img = make('img');
  btnRight = make('i');

  //structure
  carousel.appendChild(btnLeft);
  carousel.appendChild(img);
  carousel.appendChild(btnRight);

  //classes
  carousel.classList.add('carousel');
  btnLeft.classList.add('fa-arrow-left', 'left-button', 'fas');
  btnRight.classList.add('fa-arrow-right', 'right-button', 'fas');
  img.classList.add('img-show');

  //content
  imgIndex = 0;
  img.src = imgArray[imgIndex][0];
  // console.log(imgArray)

  //eventlisteners
  btnLeft.addEventListener('click', () => {
    if(imgIndex === 0){
      imgIndex = imgArray.length - 1
    }else{
      imgIndex--
    }
    img.src = imgArray[imgIndex][0]
  });

  btnRight.addEventListener('click', () => {
    if(imgIndex === imgArray.length - 1){
      imgIndex = 0
    }else{
      imgIndex++
    }
    img.src = imgArray[imgIndex][0]
  });


  return carousel
}

caroEntry.appendChild(addCaro())