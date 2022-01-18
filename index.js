let start=document.getElementById("btn1");
let stop=document.getElementById("btn2");
let reset=document.getElementById("btn3");
let h=document.querySelector("h1");
let count=0;

start.addEventListener('click',function(){
   setInterval( start=function(){
       let secound=count++
        displayTime(secound);
        // console.log("hhhhhhiiiiii");
        // h.innerText=count++;



    },10)
    function displayTime(second) {
        let hr = Math.floor(second/3600)
        
      let min = Math.floor(second /60 );
        if(min>60){min=min%60}
      
  
      let sec = Math.floor(second %60);
      h.innerHTML = `${hr < 10 ? "0" : ""}${hr}:${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
    }


});
reset.addEventListener('click', function(){
    clearInterval(count)
    count=0;
    h.innerHTML=`00:00:00`;

})
function pause(){
    clearInterval(count);
}
function startpause(){
    if(start.innerText=="Start"){
        start();
        start.innerText="Pause";
    }
    else{
        pause();
        start.innerText="Start"
    }
}
