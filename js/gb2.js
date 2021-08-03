const parent = {
    name: '',
    color: '',
    change: function (color) {
        this.color = color;
    }
}

const child = {
    name: '',
    color: ''
}

function menuItemo(color, name) {
    this.color = color,
        this.name = name,
        this.makeRed = function () {
            this.color = 'red';
        }
}
const item1 = new menuItemo('green', 'sofa')
const item2 = new menuItemo('red', 'sofa')
// console.log(item1, item2)

class MenuItem2 {
    constructor(color, name, width='100ps') {
        this.color = color
        this.name = name
        this.width = width
    }
    makeRed(){
        this.color = 'red'
    }
}

class MainMenu extends MenuItem2 {
    constructor(color, name, width, height) {
        super(color, name, width);
        this.height = height;
    }
}
const item3 = new MainMenu('green', 'sofa', '10px', '120px')
console.log(item3)