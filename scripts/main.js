const app = Vue.createApp({
    data() {
        return {
            currentIndex: 0,
            photos: [
                'https://github.com/MatveyVue/icopn/blob/main/%D0%A1ap.png?raw=true',
                'https://github.com/MatveyVue/icopn/blob/main/%D0%A1ap.png?raw=true',
                'https://github.com/MatveyVue/icopn/blob/main/%D0%A1ap.png?raw=true',
                'https://github.com/MatveyVue/icopn/blob/main/%D0%A1ap.png?raw=true',
            ],
        };
    },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
        },
    },
});

app.mount('#app');