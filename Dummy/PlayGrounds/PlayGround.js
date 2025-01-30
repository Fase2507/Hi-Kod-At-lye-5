// output=confirm("Do you want to exit?");
// console.log(output);
// document.getElementById("root").innerHTML = output;

// const x=8;
// const y="8";
// console.log(x==y);//value check
// console.log(x===y);//value and type check
//CLOCK
//                     let min=15;
//                     let sec=60;
//                     const el=document.getElementsByTagName("h2");

//                     setInterval(() => {
//                         sec--;
//                         if(sec<0){
//                             min--;
//                             sec=60;
//                         }
//                         el[0].innerText=`${min}:${sec}`;

//                     },1000);

function changeAllInput(){
    const inputEL2=document.querySelectorAll("input");

    for(let i in inputEL2){
        inputEL2[i].value="ALL CHANGED"; 
    }  

    // inputEL.forEach((val=>{
    //     val.value="ALL CHANGED";
    // }))
}

function changeInput(){
    let inputEl=document.querySelector("#input");
    inputEl.value="Changed";

}

function resetInput(){
    let inputEl=document.getElementById("input");
    inputEl.value =" ";
}
function resetInput2(){
    let inputEl=document.querySelector(".ipt");
    inputEl.value =" ";
}

const root=document.getElementById("root");

function changeElement(){
     root.innerHTML="<b style='color:red'>Hello mrt</b>";
    // root.innerText="<b style='color:red'>Hello mrt</b>";
    root.style.display="Block";

}

function changeElement2(){
    root.style.display="None";
}
// const para=document.createElement("p");
// para.innerHTML="Hello World";
// root.appendChild(para)
// debugger;