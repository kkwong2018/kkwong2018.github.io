new Vue({
    el: '#app',
    data: {
        greeting: '↓↓ Click ↓↓',
        user: 'kkwong',
        city: 'KT'
    },
    methods: {
        changeGreeting() {
            var items = 8   // <----------- ###Set genName case number here####
            var num = Math.floor(Math.random() * items) + 1;
            this.greeting = genName(num);
        }
    }
})

function genName(num) {
    switch (num) {
        case 1: return '🍟 金 拱 門 🍟'
        case 2: return '譚 Boy'
        case 3: return 'Red Tea'
        case 4: return '🐷  扒  米'
        case 5: return '一  口  🐮'
        case 6: return 'HK 🐟 蛋  檔'
        case 7: return '地  地  道'
        case 8: return '紅 🍑 樓'
    }   
}
