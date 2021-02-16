const btns = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const math = document.querySelectorAll('.orange');
let jumlah = result.textContent;
let runningTotal = 0
symbol = '';

btns.forEach(function(btn){
 btn.addEventListener('click', function(e){
  if(e.target.value === 'back'){
   if(jumlah !== ''){
    jumlah = jumlah.slice(0, -1);
    result.textContent = jumlah;
    console.log(jumlah);
    checknum();
   }
  }
  else if(e.target.value === 'clear'){
   clr();
  }
  else{
   mtk = e.target;
   jumlah = jumlah + mtk.value;
   result.textContent = jumlah;
   getNum();
  }
 })
})

function checknum(){
 if (jumlah === ''){
  jumlah = 0;
  result.textContent = jumlah;
  jumlah = ''
 }
}

function getNum(){
 if(mtk.classList.contains('orange')){
  if (runningTotal === 0){
   runningTotal = parseInt(jumlah);
   getSym();
   console.log(symbol);
   console.log(jumlah);
  }else{
   console.log(jumlah);
   console.log(runningTotal);
    getMath();
    console.log(runningTotal);
    result.textContent = runningTotal;
    getSym();
    console.log(symbol);
   }
   jumlah = '';
  }
  if(mtk.classList.contains('equal')){
   getMath();
   result.textContent = runningTotal;
  }
 }

function getMath(){
 if(symbol === 'plus'){
  runningTotal += parseInt(jumlah);
 }else if(symbol === 'minus'){
  runningTotal -= parseInt(jumlah);
 }else if(symbol === 'bagi'){
  runningTotal /= parseInt(jumlah);
 }else if(symbol === 'kali'){
  runningTotal *= parseInt(jumlah);
 }
 symbol = '';
}

function getSym(){
 if(mtk.classList.contains('plus')){
  symbol = 'plus';
 }else if(mtk.classList.contains('minus')){
  symbol = 'minus';
 }else if(mtk.classList.contains('bagi')){
  symbol = 'bagi';
 }else if(mtk.classList.contains('kali')){
  symbol = 'kali';
 } 
}

function clr(){
 jumlah = '';
 result.textContent = 0;
 runningTotal = 0;
}