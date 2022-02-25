const app = new Vue({
    el: '#app',
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
        className: 'active not-active',
        clock: undefined, // serve un valore iniziale per far partire il l'interval, potevo metterlo anche a null.

    },

    methods: {

        activeThumbnail: function (index){
            if(this.activeIndex === index){
                return 'active';
            }
        },

        activeSlide: function (index){
            if(this.activeIndex === index){
                return 'active-slide';
            }
        },

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

        clickOnThumbnail: function(index) {
            // al click sulla thumbnail activeIndex diventa uguale all'indice della posizione dell'immagine nell'array
            this.activeIndex = index;
        },

        // funzione che ferma l'autoplay e assegnadola a @mouseenter allora l'autoplay del carosello si fermerà quando ci vado sopra con il mouse
        stopAutoplay: function() {
            clearInterval(this.clock);
            console.log(this.clock);
        },

        // funzione che ferma l'autoplay e assegnadola a @mouseleave allora l'autoplay del carosello riprenderà quando tolgo il mouse dalla slide
        startAutoplay: function (){
            this.clock = setInterval (this.down, 3000);
        }
    },
    // uso un hook di vuejs --> vedi lifecycle diagram in https://v2.vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    mounted() {
        this.startAutoplay();
    },

})


