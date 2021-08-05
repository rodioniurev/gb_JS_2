class Basket {
    items = []
takeItem(item){

    this.items.append(item)
}
}

let basket = new Basket()

class Item {
    constructor(name, price, amount) {
        this.name = name
        this.price = price
        this.amount = amount
        basket.takeItem(this)
    }
    getSum () {
        return this.price * this.amount
    }

}

class GoodsList {

    getSum(basket){
        summa = 0;
        for (let item of basket.items){
            summa += item.getSum();
        }
        return summa;
    }
}