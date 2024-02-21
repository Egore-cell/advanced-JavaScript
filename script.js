const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

class GoodsItem {
    constructor({ title = '', price = 0 }) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `
    <div class="goods-item">
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    </div>
    `;
    }
}

class GoodsList {
    // constructor(list = []) {
    //     this.list = list;
    // }

    list = [];

    fetchGoods() {
        this.list = goods;
    }

    calculatePrice() {
        this.list.reduce((accumulator, item, index, list) => {
            return accumulator + item.price;
        }, 0)
    }

    render() {
        const resultList = this.list.map((item) => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = resultList.join('');
    }
}


const goodsList = new GoodsList(goods);
goodsList.fetchGoods();
goodsList.render();
const calculateGoods = goodsList.calculatePrice();