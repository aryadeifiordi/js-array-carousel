// get images as array

const slides = [
   'jim1.jpeg',
   'jim2.jpeg',
   'jim3.jpeg',
   'jim4.jpeg',
]

const activeImage = 0;

const sildesElement = document.querySelector('.slides')

console.log(slides, activeImage, sildesElement);

//for loop

for (let i = 0; i < slides.length; i++) {
    const slide = slides [i];

    const slideMarkup = '<img src="./img/jim 1.jpeg" alt="Image 1">'
}