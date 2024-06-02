let body = document.getElementById("myBody");
let employees = document.getElementById("employees");
let name = document.getElementById("name");
let profession = document.getElementById("profession");
let age = document.getElementById("age");
const error = document.getElementById("error");
const success = document.getElementById("success");
const submit = document.getElementById("submit");
body.style.backgroundColor = "black";
body.style.color = "white";
let employeeArray = [];
function ShowEmployee(){
    employees.innerHTML=""
    for (let i = 0; i < employeeArray.length; i++) {
        let employee=document.createElement("p");
        let deleteBtn=document.createElement("button");
        employee.id=i;
        employee.style.border="1px solid white";
        employee.style.borderRadius="10px";
        employee.style.width="max-content";
        employee.style.padding="5px 10px 5px 10px";
        deleteBtn.textContent="Delete User";
        deleteBtn.style.padding="5px 10px 5px 10px";
        deleteBtn.style.borderRadius="10px";
        deleteBtn.id=`${i}`;
        deleteBtn.addEventListener("click",deleteEmployee);
        employee.innerHTML=`${i+1}. Name : ${employeeArray[i].name}   Profession : ${employeeArray[i].profession}     Age : ${employeeArray[i].age} `;
        employee.appendChild(deleteBtn);
        employees.appendChild(employee);
    }
}
submit.addEventListener("click", addEmp);
function addEmp(event) {
    event.preventDefault()
    if (name.value == "" || profession.value == "" || age.value == "") {
        error.style.display = "block";
        success.style.display = "none";
    }
    else {

        employeeArray.push({ name: `${name.value}`, profession: `${profession.value}`, age: `${age.value} `,id:`${employeeArray.length}` })
        error.style.display = "none";
        success.style.display = "block";
    }
    if (employeeArray.length == 0) {
        employees.textContent = "You have 0 Employees";
    
    }
    else {
       ShowEmployee();
    }
}
function deleteEmployee(event){
        event.preventDefault()
        employeeArray.pop(Number(event.target.id))
        // for(let i=0; i<employeeArray.length;i++){
        //     console.log("id 222",event.target.id)
        //     let demo=employeeArray[i]
        //     if(Number(demo.id)==Number(event.target.id)){
        //         employeeArray.pop(Number(demo.id))
        //         // employeeArray.splice(Number(demo.id),1)
        //     }
        // }
        ShowEmployee()
}

