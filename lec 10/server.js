const express=require("express");
const app=express()

//middleware
app.use(express.json()); //data parse coming as json

const employees=[
    {empId:1, name:"Rihan", salary:100000, department:"IT"},
    {empId:2, name:"Shraddha", salary:60000, department:"HR"},
    {empId:3, name:"Amit", salary:30000, department:"Finance"},
    {empId:4, name:"Vaibhav", salary:40000, department:"IT"},
    {empId:5, name:"Rudra", salary:40000, department:"Sales"},
]

///Read Operation
app.get("/employees",(req,res)=>{
    res.json(employees)
})
///employee get by their id
app.get("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const employee=employees.find((employee)=>employee.empId===Number(id));
    if(!employee){
        res.status(404).json({success:false, message:"employee not found"});
    }
    res.json({success:true,employee});
    
})

//Create
app.post("/employees",(req,res)=>{
    const employee=req.body;
    employees.push({empId:employees.length+1,...employee});
    res.json({success:true,employee});  
})

//update
app.put("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const employee=req.body;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    result.name=employee.name;
    result.salary=employee.salary;
    result.department=employee.department;
    res.json({success:true,employee});
})

//delete
app.delete("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    employees.splice(id-1,1);
    res.json({success:true,result});
})

app.listen(3000,()=>console.log("server is running on port 3000"));








// const express = require("express");
// const app = express();

// const employes = [
//     {employId:1, name: "Aisha" , salary: 1000, department:"IT"},
//     {employId:2, name: "Snighdha" , salary: 10889600, department:"HR"},
//     {employId:3, name: "Rupali" , salary: 1004650, department:"Bikhari"},
//     {employId:4, name: "Malika" , salary: 10087600, department:"Dudhwali"},
// ];

// // midleware
// app.use(express.json());


// app.get("/employes" , function(req, res) {
//     res.json(employes);
// });

// app.get("/employes" , function(req, res) {
//     const Id =req.params.Id;
//     const employe =employes.find((employe) =>employe.employId ==Number(Id));
//     if(!employe){
//         res.status(404).json({success:false, message:"employee not found"});
//     }
//     res.json({success:true ,employes});
// });

// app.post("/employes" , function(req, res) { 
//     const employe =req.body ;
//     employes.push({employId:employes.length + 1, ...employe});
//     res.json({success:true ,employes});
// });

// app.put("/employes" , function(req, res) { 
//     const Id = req.params.Id;
//     const employe =req.body ;
//     const result = employes.find((employe) => employe.employId===Number(Id));
//     if(!result){
//         res.status(404).json({success:false, message:"employee not found"});
//     }
//     result.employename=employe.name;
//     result.employesalary=employe.salary;
//     result.department=employe.department;
//     res.json({success:true ,employes});
// });


// app.listen(3049 , function(req , res) {
//     console.log("Dudh pila do port 3049 pe");
// });
