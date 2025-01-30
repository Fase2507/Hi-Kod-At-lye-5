
    let min=1;
    let sec=0;
let interv=setInterval(()=>{
    const el =document.querySelector(".stopwatch");

    sec--;
    if(sec<0){
        min--;
        sec=59;
        if(min<0){
            clearInterval(interv);
            // interv.clearInterval();
            alert("Time's up!");
            return;
        }
    }
    el.innerHTML=`${min}:${sec}`;
},1000);

function restart(){
    clearInterval(interv);
    min=1;
    sec=0;
    const el =document.querySelector(".stopwatch");
    el.innerHTML=`${min}:${sec}`;
    interv=setInterval(()=>{
        sec--;
        if(sec<0){
            min--;
            sec=59;
            if(min<0){
                clearInterval(interv);
                alert("Time's up!");
                return;
            }
        }
        el.innerHTML=`${min}:${sec}`;
    },1000);
}

let isPaused=false;
function pause(){
    if(isPaused){
        interv=setInterval(()=>{
            sec--;
            if(sec<0){
                min--;
                sec=59;
                if(min<0){
                    clearInterval(interv);
                    alert("Time's up!");
                    return;
                }
            }
            let el =document.querySelector(".stopwatch");
            el.innerHTML=`${min}:${sec}`;
        },1000);
        isPaused=false;
        document.querySelector("#pause").innerHTML="Pause";
        console.log(isPaused);
    }else{
        clearInterval(interv);
        isPaused=true;
        document.querySelector("#pause").innerHTML="Continue";
        console.log(isPaused);

    }
}

