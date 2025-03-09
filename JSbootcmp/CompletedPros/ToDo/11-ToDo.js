/*
Alghoritms
1-Make an Array to store Todos.
2-When we click "Add".
3-Get values from input.
4-Add it to array to store.
5-console.log(Array).
*/
function keyLog(event){
  if(event.key==="Enter"){
    addTodo()
  }
}

// const todoList=[{
//   name:"eat",
//   dueDate: '20-09-2002'
// }];
const todoList=[];
renderTodoList();

function renderTodoList(){

  let todoListHTML='';

  for(let i=0; i<todoList.length;i++){
    const todObject=todoList[i];
    // const name=todObject.name;
    // const dueDate=todObject.dueDate;
    const {name,dueDate}=todObject;
    const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="del-btn" 
          onclick="
          todoList.splice(${i},1);
          renderTodoList();
        ">Delete</button>
    `;
    todoListHTML+=html;
  }
  document.querySelector(".js-todo").innerHTML=todoListHTML;
}
function addTodo(){
  const inputEl=document.querySelector('.js-name-input');
  const datEl=document.querySelector('.js-date');

  const name=inputEl.value;
  const dueDate=datEl.value;
  if(inputEl.value==''){
    return;
  }else
  {
    todoList.push({
      name:name,
      dueDate:dueDate
    });
}
  // console.log(todoList);
  inputEl.value='';
  datEl.value='';

  renderTodoList();
}


// document.getElementById('js-todo').innerHTML=`<h2>${todoList}</h2>`;