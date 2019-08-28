new Vue({
    el: '#app',
    data: {
        greeting: 'click select what fking to eat',
        user: 'kkwong',
        city: 'KT'
    },
    methods: {
        changeGreeting() {
            var num = Math.floor(Math.random() * 6) + 1;

            this.greeting = genName(num);
        }
    }
})

function genName(num) {
    switch (num) {
        case 1: return 'Mc Don Don'
        case 2: return 'tam boy'
        case 3: return '30'
        case 4: return 'Ban Gor'
        case 5: return 'red tea'
        case 6: return '豬米'
    }   
}