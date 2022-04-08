let navbar = document.querySelector('.header .flex .navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

let account = document.querySelector('.user-account')

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
};
document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
};


window.onscroll = () => {
    navbar.classList.remove('active');
};