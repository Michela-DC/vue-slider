// Trasformate i 3 array con i dati, in un un unico array di oggetti
// ogni oggetto corrisponderà ad una slide e conterrà 3 proprietà: l’immagine, il titolo e la descrizione

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },

    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        description: 'Lorem ipsum',
    },

    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },

    {
        image: 'img/04.jpg',
        title: 'Germania',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },

    {
        image: 'img/05.jpg',
        title: 'Paradise',
        description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
]
console.log(slides);

const thumbnailsContainer = document.querySelector(".thumbnails-container");
const slideWrapper = document.querySelector('.slide-wrapper');
const imgInfo = document.querySelector('.img-info');
let activeIndex = 0; // creo un indice che mi serve per spostare la classe active incrementando o decrementando l'indice - lo inizializzo a zero per partire dalla prima slide

slides.forEach ( (element) => {
    //salvo le proprietà della posizione corrente in delle costanti
    const {image} = element;
    const {title} = element;
    const {description} = element;
 
    // creo l'elemento html e lo inserisco nel rispoettivo container html
    const imgThumbnail = `<img class="thumbnail" src="${image}">`;
    thumbnailsContainer.innerHTML += `${imgThumbnail}`;
    console.log(imgThumbnail, thumbnailsContainer);
 
    const imgSlide = ` <img class="slide" src="${image}">`;
    slideWrapper.innerHTML += `${imgSlide}`;
    console.log(slideWrapper);
 
    const imgTitle = `<h3 class="img-title">${title}</h3>`;
    const imgText = `<p class="img-text">${description}</p>`;
    imgInfo.innerHTML += `${imgTitle} ${imgText}`;
    console.log(imgTitle,imgText,imgInfo);
    
});

// salvo l'array delle thumbnail, delle slide e delle info
// const thumbnail = document.getElementsByClassName("thumbnail"); se avessi fatto così mi ritornava una lista di nodi
const thumbnail = [...document.getElementsByClassName("thumbnail")];
const slide = [...document.getElementsByClassName("slide")];
const slideTitle = [...document.getElementsByClassName("img-title")];
const slideText = [...document.getElementsByClassName("img-text")];
console.log(thumbnail, slide, slideTitle, slideText);

// imposto la thumbnail, la slide e le info attive in base all'indice di partenza
// Se avessi fatto imgElement.classlist.add("active"); così non funziona perché imgElement é una stringa quindi mi sono creata l'array per prenderne gli elementi
thumbnail[activeIndex].classList.add('active'); 
slide[activeIndex].classList.add('active-slide');
slideTitle[activeIndex].classList.add('active-slide');
slideText[activeIndex].classList.add('active-slide');
console.log(thumbnail[activeIndex], slide[activeIndex],slideTitle[activeIndex],slideText[activeIndex]);

// al click sui bottoni mi sposto su o giù di una immagine
const btnUp = document.getElementById('btn-up');
console.log(btnUp);

const btnDown = document.getElementById('btn-down');
console.log(btnUp);  

// bottone su
btnUp.addEventListener('click', function(){
    console.log('vai sù');

    // devo togliere la classe active dalla slide e dalla thumbnail correnti
    slide[activeIndex].classList.remove('active-slide');
    slideTitle[activeIndex].classList.remove('active-slide');
    slideText[activeIndex].classList.remove('active-slide');
    thumbnail[activeIndex].classList.remove('active');
    console.log(thumbnail[activeIndex], slide[activeIndex], slideTitle[activeIndex]);
    
    if ( activeIndex > 0){ 
    //decremento l'activeIndex per stabilire la nuova thumbnail e la nuova slide corrente
        activeIndex --;
    // la prima immagine ha indice 0 quindi in questo if dico che se clicco sul pulsante su' e l'indice è minore di 0 non posso più diminuire l'indice, quindi non andrò oltre la prima immagine
    } else { 
    // se l'indice diventa < 0 allora assegno all'indice la lunghezza dell'array - 1 (in questo caso 4) così l'indice si sposterà sull'immagine che dentro l'array è nella posizione corrispondente ovvero quella che ho messo per ultima in basso [array è lungo 5 ma l'ultima pozione è 4 perchè si parte a contare da 0]
        activeIndex = items.length - 1;
    // in questo modo riesco ad andare oltre alla prima immagine ripartendo dall'ultima in basso
    }
    
    // devo aggiungere la classe active dalla slide e dalla thumbnail correnti
    slide[activeIndex].classList.add('active-slide');
    slideTitle[activeIndex].classList.add('active-slide');
    slideText[activeIndex].classList.add('active-slide');
    thumbnail[activeIndex].classList.add('active');
    console.log(thumbnail[activeIndex], slide[activeIndex], slideTitle[activeIndex]);
})

//bottone giù
btnDown.addEventListener('click', function(){
    console.log('vai giù');
    
    slide[activeIndex].classList.remove('active-slide');
    slideTitle[activeIndex].classList.remove('active-slide');
    slideText[activeIndex].classList.remove('active-slide');
    thumbnail[activeIndex].classList.remove('active');
    console.log(activeIndex)
    
    if (activeIndex < slides.length - 1){ 
    // se l'indice è minore della lunghezza dell'array - 1 (ovvero minore delle posibili posizione dentro l'array, in questo caso 4) allora incremento l'indice
        activeIndex ++;
    } else{
    // se l'indice diventa maggiore della lunghezza dell'array - 1 allora lo faccio ritornare a zero, ovvero alla posizione dell'aray in cui è l'immagine che ho messo per prima i alto
        activeIndex = 0;
    }
    
    slide[activeIndex].classList.add('active-slide');
    slideTitle[activeIndex].classList.add('active-slide');
    slideText[activeIndex].classList.add('active-slide');
    thumbnail[activeIndex].classList.add('active');

})

