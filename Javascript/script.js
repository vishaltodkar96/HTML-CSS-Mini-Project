let btnclear = document.querySelector('button');
let inputs = document.querySelector('input');

btnclear.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '');
});