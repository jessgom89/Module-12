const inquirer=require("inquirer")
const mysql=require("mysql2")
const {printTable}=require("console-table-printer")
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    port:3306,
    database:"employees_db"

})
db.connect(()=>{
    menu()
})
function menu(){
 inquirer.prompt({
    type:"list",
    message:"choose the following optiones",
    choices:["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    name:"menu"
 })   
 .then(response=>{
    console.log(response)
    if(response.menu==="view all departments"){
        viewDepartment()
    }
    if (response.menu==="view all roles"){
        viewRoles()
    }
    if (response.menu==="view all employees"){
        viewEmployees()
        
    }
    if (response.menu==="add a department"){
        addDepartment()
    }
    if (response.menu==="add a role"){
    addRole()
    }
    if (response.menu==="add an employee"){
        addEmployee()

    }
    if (response.menu==="update an employee role"){
    updateAnEmloyeerole()

    }


 
 })
}
function updateAnEmloyeerole(){
    inquirer.prompt([{
      type:"input",
      message:"What is the new role id?",
      name:"role_id"
    },{
        type:"input",
        message:"what is the employee id?",
        name:"employee_id",
    }])
.then(response=>{
    db.query(`update employee set role_id=${response.role_id} where id=${response.employee_id};`,err=>{
        viewEmployees()
    })
})
}
function addEmployee(){
    inquirer.prompt([{
        type:"input",
        message:"What is your first name?",
        name:"firstname",
    },{
        type:"input",
        message:"what is your last name?",
        name:"lastname",
    },{
        type:"input",
        message:"what is the role_id?",
        name:"role_id",
    },{
        type:"input",
        message:"what is the manager_id?",
        name:"manager_id",
    }])
    .then(response=>{
        db.query(`INSERT Into  employee (first_name,last_name,role_id,manager_id)
        VALUES("${response.firstname}","${response.lastname}",${response.role_id},${response.manager_id})`,err=>{
            viewEmployees()
        })
    })
}
function addRole(){
    inquirer.prompt([{
        type:"input",
        message:"What is the title?",
        name:"newTitle"
    },{
        type:"input",
        message:"What is the Salary?",
        name:"newSalary"
    },{
        type:"input",
        message:"whats is the department_id",
        name:"newDepartment_id"    
    }])
    .then(response=>{
        db.query(`INSERT INTO role (title,salary, department_id)
        VALUES ("${response.newTitle}",${response.newSalary},${response.newDepartment_id})`,err=>{
            viewRoles()
        })
    })

}
function addDepartment(){
    inquirer.prompt([{
        type:"input",
        message:"enter new department name",
        name:"newDepartment"
    }])
    .then(response=>{
        db.query(`INSERT INTO department (name)
        VALUES ("${response.newDepartment}")`,err=>{
            viewDepartment()
        })
    })
}
function viewEmployees(){
    db.query("select * from employee",(err,data)=>{
        printTable(data)
        menu()

    })
}
function viewRoles(){
    db.query("select * from role",(err,data)=>{
        printTable(data)
        menu()
    })

}
function viewDepartment(){
    console.log("department")
    db.query("select * from department",(err,data)=>{
        printTable(data)
        menu()
    })
}
