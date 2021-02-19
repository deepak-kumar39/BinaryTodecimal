const input = document.querySelector('#binary');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
// console.log(input+"val") ;
btn.addEventListener('click',()=>{
let val = input.value;
let decimal=0;
let len = val.length-1;
for (let iterator of val) {
    
    if(iterator>1){
        result.innerHTML = "plz 0 and 1 only";
        return;
    }
}
for (const iterator of val) {
    decimal += Math.pow(2,len--)*parseInt(iterator); 
}
result.innerHTML = decimal;
})