// definir las imagenes 
const images = [
    'imagenes/carro_1.jfif',
    'imagenes/carro2.jfif',
    'imagenes/carro3.jfif',
];

// estado de guardado 
let index = 0;
const max = images.length;

// elementos 
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// click events

prevSlideButton.addEventListener('click',function(){
    index--;
    setImageIndex();
    changeBackgroundImage(images[index],containerElement);
});

nextSlideButton.addEventListener('click',function(){
    index ++;
    setImageIndex();
    changeBackgroundImage(images[index],containerElement);
});

// utility function 
function setImageIndex() {
  if (index < 0) index = max - 1;
  if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
  element.style.backgroundImage = `url(${backgroundImage})`;;
}
