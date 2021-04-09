let button2 = document.querySelector('.button2');
let color = document.querySelector('body');
let index2 = 0;

button2.addEventListener('click', function (event){
    if(index2 === 0){
        color.style.background = '#303030';
        index2 = 1;
    }else{
        color.style.background = '#A0A0A0';
        index2 = 0;
    }
});
