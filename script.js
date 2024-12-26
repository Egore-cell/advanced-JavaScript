const goods = [
    { product_name: 'Shirt', price: 150 },
    { product_name: 'Socks', price: 50 },
    { product_name: 'Jacket', price: 350 },
    { product_name: 'Shoes', price: 250 },
];

const URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = '/catalogData.json';
const url = `${URL}${GOODS}`;

function service(url) {
    return fetch(url).then((response) => {
        return response.json();
    });
}

const app = new Vue({
    el: document.getElementById('root'),
    data: {
        goods: [],
        search: '',
        isVisibleCard: false,
    },


    methods: {
        setVisibleCard() {
            this.isVisibleCard = !this.isVisibleCard
        }
    },


    mounted() {
        service(url).then((data) => {
            this.goods = data;
        })
    },


    computed: {
        calculatePrice() {
            return this.goods.reduce((accumulator, item, index, list) => {
                return accumulator + item.price;
            }, 0)

        },

        filteredGoods() {
            return this.goods.filter((item) => {
                const regExp = new RegExp(this.search);
                return regExp.test(item.product_name);
            })
        }
    }
})




















































