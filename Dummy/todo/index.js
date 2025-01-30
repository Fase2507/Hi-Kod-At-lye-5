const inputEl=document.querySelector("#input");
const buttonEl=document.querySelector("#save");
const ulEl=document.querySelector("ul");
let todo=[];

function save(){
    const val=inputEl.value;
    todo.push(val);
    inputEl.value="";
    console.log(todo);
    showList();
}

function showList(){
    let text = "";
    todo.forEach((val,i) => {
        text += `<li>${val}<button onclick="deleteList(${i})" id="delete">delete</button></li>`;
    })
    ulEl.innerHTML=text;
}

function deleteList(i){
    const resp=confirm("Are you sure you want to delete?");
    
    if(resp){

    if (i==0){
        todo.shift();
        showList();
    }
    todo.splice(i,i++);
    showList();
        
    }
}
