new Vue({
    el: '#app',
    data: {
        greeting: '↓↓ Click ↓↓',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5:'',
    },
    methods: {
        changeGreeting() {
            //var items = 5   // <----------- ###Set genName case number here####
            var itemsArray = [
                this.input1,
                this.input2,
                this.input3,
                this.input4,
                this.input5
            ]
            var num = Math.floor(Math.random() * itemsArray.length);
            if (itemsArray[num] == '' || itemsArray[num] == this.greeting) {
                this.changeGreeting();
                return;
            }
            //this.greeting = genName(num);
            this.greeting = itemsArray[num];

        }
    }
})

function genName(num) {
    switch (num) {
        case 1: return '金  拱  橋'
        case 2: return '譚 Boy'
        case 3: return '30'
        case 4: return '西  遊  記'
        case 5: return 'Red Tea'
        case 6: return '豬  扒  米'
        case 7: return '1  口  牛'
        case 8: return 'HK 魚 蛋  檔'
        case 9: return '地  地  道'
        case 10: return '西遊記 之 飯'
    }   
}