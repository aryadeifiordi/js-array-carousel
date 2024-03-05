// get images as array
const slides = [
    'jim 1.jpeg',
    'jim2.jpeg',
    'jim3.jpeg',
    'jim4.jpeg',
 ];
 
 const slidesContainer = document.querySelector('.slides');
 
 for (let i = 0; i < slides.length; i++) {
     const slide = slides[i];
     const imageElement = document.createElement('img');
     imageElement.src = `./img/${slide}`;
     imageElement.alt = `Image ${i + 1}`;
     
     // Aggiungo la classe "active" solo alla prima immagine
     if (i === 0) {
         imageElement.classList.add('active');
     } else {
         // Nascondo le altre immagini
         imageElement.style.display = 'none';
     }
     
     slidesContainer.appendChild(imageElement);
 }
 
 const prevButton = document.querySelector('.prev-btn');
 const nextButton = document.querySelector('.next-btn');
 let activeIndex = 0;
 
 prevButton.addEventListener('click', () => {
     activeIndex = (activeIndex - 1 + slides.length) % slides.length;
     updateActiveSlide();
 });
 
 nextButton.addEventListener('click', () => {
     activeIndex = (activeIndex + 1) % slides.length;
     updateActiveSlide();
 });
 
 function updateActiveSlide() {
     const slides = document.querySelectorAll('.slides img');
     slides.forEach((slide, index) => {
         if (index === activeIndex) {
             slide.classList.add('active');
             slide.style.display = 'block'; 
         } else {
             slide.classList.remove('active');
             slide.style.display = 'none'; 
         }
     });
 }