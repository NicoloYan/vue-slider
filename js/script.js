var app = new Vue (
    {
        el: '#app',
        data: {

            currentActiveElement: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]
        },
        methods: {
            showNextElement() {
                // Incrementa il valore di currentActiveElement fino ad arrivare alla fine dell'array.
                // Quando si arriva alla fine, fa tornare all'inizio dell'array
                if(this.currentActiveElement < this.slides.length - 1) {
                    this.currentActiveElement++;                    
                } else {
                    this.currentActiveElement = 0
                }

            },
            showPrevElement() {
                // Decrementa il valore di currentActiveElement fino ad arrivare all'inizio dell'array.
                // Quando si arriva all'inizio, fa tornare alla fine dell'array
                if(this.currentActiveElement > 0) {
                    this.currentActiveElement--;                    
                } else {
                    this.currentActiveElement = this.slides.length - 1
                }

            }
        }
    }
);