let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Caffe Mocha',
        image: '1.png',
        price: 25000
    },
    {
        id: 2,
        name: 'Caramel Machiato',
        image: '2.jpg',
        price: 32000
    },
    {
        id: 3,
        name: 'White Chocolate Mocha',
        image: '3.jpg',
        price: 18000
    },
    {
        id: 4,
        name: ' Strawberries Drink',
        image: '4.jfif',
        price: 17000
    },
    {
        id: 5,
        name: 'Frappucino',
        image: '5.jpg',
        price: 26000
    },
    {
        id: 6,
        name: 'Matcha Drink',
        image: '6.jfif',
        price: 17000
    },
    {
        id: 7,
        name: 'Expresso',
        image: '7.jfif',
        price: 29000
    },
    {
        id: 8,
        name: 'Coffe Susu Gula Aren',
        image: '8.jfif',
        price: 24000
    },
    {
        id: 9,
        name: 'Americano',
        image: '9.jfif',
        price: 20000
    },
    {
        id: 10,
        name: 'Cold Coffees',
        image: '10.jpg',
        price: 45000
    },
    {
        id: 11,
        name: 'Caffucino',
        image: '11.jfif',
        price: 26000
    },
    {
        id: 12,
        name: 'Chocolate Frapuccino',
        image: '12.png',
        price: 33000
    },
    {
        id: 13,
        name: 'Kentang Goreng',
        image: '13.jfif',
        price: 16000
    },
    {
        id: 14,
        name: 'Nugget Goreng',
        image: '14.jfif',
        price: 18000
    },
    {
        id: 15,
        name: 'Burger Ayam',
        image: '15.jfif',
        price: 22000
    },
   
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="mage/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Masukan Keranjang</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="mage/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}