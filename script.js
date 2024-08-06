
const URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = '/catalogData.json';
const url = `${URL}${GOODS}`;

function service(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
        }
        xhr.send();
    })

}

const goods = [
    { product_name: 'Shirt', price: 150 },
    { product_name: 'Socks', price: 50 },
    { product_name: 'Jacket', price: 350 },
    { product_name: 'Shoes', price: 250 },
];

class GoodsItem {
    constructor({ product_name = '', price = 0 }) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `
    <div class="goods-item">
    <h3>${this.product_name}</h3>
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
        return service(url).then((data) => {
            this.list = data;
        })
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
goodsList.fetchGoods().then(() => {
    goodsList.render();
})

