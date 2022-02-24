// Partendo dal markup della versione svolta vanilla js con l’array di oggetti, rifare lo slider ma questa volta usando Vue.
let index = 0;

const container = new Vue({
    el: '#container',
    data: {
        slides: [
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
        ],

        activeIndex: 0,
    },

    methods: {
        down: function () {

            if (this.activeIndex < this.slides.length - 1){ 
            // se l'indice è minore della lunghezza dell'array - 1 (ovvero minore delle posibili posizione dentro l'array, in questo caso 4) allora incremento l'indice
                this.activeIndex ++;
            } else{
            // se l'indice diventa maggiore della lunghezza dell'array - 1 allora lo faccio ritornare a zero, ovvero alla posizione dell'aray in cui è l'immagine che ho messo per prima i alto
                this.activeIndex = 0;
            }
    },

        up: function () {

            if ( this.activeIndex > 0){ 
            //decremento l'activeIndex per stabilire la nuova thumbnail e la nuova slide corrente
                this.activeIndex --;
            // la prima immagine ha indice 0 quindi in questo if dico che se clicco sul pulsante su' e l'indice è minore di 0 non posso più diminuire l'indice, quindi non andrò oltre la prima immagine
            } else { 
            // se l'indice diventa < 0 allora assegno all'indice la lunghezza dell'array - 1 (in questo caso 4) così l'indice si sposterà sull'immagine che dentro l'array è nella posizione corrispondente ovvero quella che ho messo per ultima in basso [array è lungo 5 ma l'ultima pozione è 4 perchè si parte a contare da 0]
                this.activeIndex = this.slides.length - 1;
            // in questo modo riesco ad andare oltre alla prima immagine ripartendo dall'ultima in basso
            }
        },

    }
})

console.log(container);


