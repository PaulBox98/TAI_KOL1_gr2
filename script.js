let button = document.querySelector('.button');
let colorBox = document.querySelector('.box');
let index = 0;

button.addEventListener('click', function (event){
    if(index === 0){
        colorBox.style.background = 'red';
        index = 1;
    }else{
        colorBox.style.background = 'blue';
        index = 0;
    }
});
