const counterBtn = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');


let count  = 0;

increaseBtn.addEventListener('click', ()=>{
    count++;
    counterBtn.textContent = count;
});
decreaseBtn.addEventListener('click', ()=>{
    count--;
    counterBtn.textContent = count;
});

resetBtn.addEventListener('click', ()=>{
    count = 0;
    counterBtn.textContent = count;
});