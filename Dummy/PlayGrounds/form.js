// const employees=[];
const firstnameEl=document.getElementsByName('firstName')[0];
const lastnameEl=document.getElementsByName('lastName')[0];
const birthdayEl=document.getElementsByName('Birthday')[0];
const salaryEl=document.getElementsByName('Salary')[0];
const tbodyEl=document.querySelector('tbody');
showList();
async function save(event){//arrow function
    event.preventDefault();    
    const data={
    firsName: firstnameEl.value,
    lastName: lastnameEl.value,
    Birthday: birthdayEl.value,
    salary: salaryEl.value,
    };
    firstnameEl.value="";
    lastnameEl.value="";
    birthdayEl.value="";
    salaryEl.value="220000";

    fetch('http://localhost:3000/employees',{
        method:'POST',
        body: JSON.stringify(data),
    })
    // employees.push(data);

    await showList();
    // console.log(employees); 
 };


async function showList(){
    const res=await fetch('http://localhost:3000/employees')
    .then(c => c.json())

    let text="";
    for(const i in res){
        const val = res[i];
        text+=`
        <tr>
            <td>${+i + 1}</td>
            <td>${val.firsName}</td>    
            <td>${val.lastName}</td>
            <td>${val.Birthday}</td>
            <td>${val.salary}</td>
            <td><button>Delete</button></td>
        </tr>

        `
    }

    tbodyEl.innerHTML=text;
}


// function showList(){
//     let text="";
//     for(const i in employees){
//         text+=`
//         <tr>
//             <td>${employees[i].firstnameEl}</td>    
//             <td>${employees[i].lastnameEl}</td>
//             <td>${employees[i].birthdayEl}</td>
//             <td>${employees[i].salaryEl}</td>
//             <td><button onclick="deleteRow(${i})">Delete</button></td>
//         </tr>

//         `;
//     }
//     tbodyEl.innerHTML=text;
//}