let navbar = document.querySelector('.header .flex .navbar')
let myOrders = document.querySelector('.my-orders')
let account = document.querySelector('.user-account')
let cart = document.querySelector('.shopping-cart')


//navbar
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    navbar.classList.remove('active');
    cart.classList.remove('active');
    myOrders.classList.remove('active');

};
// Account
document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
};
document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
};
// My orders
document.querySelector('#order-btn').onclick = () => {
    myOrders.classList.add('active');
};
document.querySelector('#close-orders').onclick = () => {
    myOrders.classList.remove('active');
};

// cart
document.querySelector('#cart-btn').onclick = () => {
    cart.classList.add('active');
};
document.querySelector('#close-cart').onclick = () => {
    cart.classList.remove('active');
};



