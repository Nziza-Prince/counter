let button = document.getElementById("btn1");
let label = document.getElementById("paragraph");
let button2=document.getElementById("btn2")
let input=document.getElementById("input")
let currentTime;
button.addEventListener('click',()=>{
  if(input.value==''){
    alert('please fill out the field')
    label.textContent=0
  }
  else{
    let counter=input.value;
    label.textContent=counter
    let interval = setInterval(function(){
      counter--
      label.textContent=counter
      if(counter<=0){
        clearInterval(interval)
      }
    },1000)
    
    button2.onclick=()=>{
      clearInterval(interval)
      currentTime=counter
      }
}
}
)

// button.onclick=function(){
//     let counter=input.value;
//     label.textContent=counter
//     let interval = setInterval(function(){
//     counter--
//     label.textContent=counter
//     if(counter<=0){
//        clearInterval(interval)
//     }
//   },1000)
//   button2.onclick=()=>{
//     clearInterval(interval)
//   }
// }


// const countIncrease=() => {
//     count--; 
//     label.textContent = count; 
//     if (count === 0) {
        
//         clearInterval(interval); 
//        label=0;
//         console.log("Countdown finished");
//         count=10;
        
//     }
// }
// var interval;
// button.onclick = () => {
//     label.textContent = count; 
//     countIncrease();
    
//      interval = setInterval(countIncrease, 500);
// };




// var classB = document.childNodes[0];

// console.log(classB.nodeName)
// console.log(classB.parentNode.childNodes[1].childNodes[2].childNodes[1].nodeName)
// console.log(document.childNodes[1].childNodes[2].childNodes[1].nodeType)

// let h1= document.getElementById("h1");
//  console.log(h1.childNodes[1].firstChild) 

// let div = document.getElementById("dic");

// let list= div.child;
// let length=list.length;

// console.log(length)

