let btn = document.querySelector('.btn');
let parentBtn = btn.parentNode.parentNode;

let images = [
    'url(img/1.jpg) no-repeat center center/ cover',
    'url(img/2.jpg) no-repeat center center/ cover',
    'url(img/3.jpg) no-repeat center center/ cover',
    'url(img/4.jpg) no-repeat center center/ cover'
]

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * 4);
    
    parentBtn.style.background = images[random];
})