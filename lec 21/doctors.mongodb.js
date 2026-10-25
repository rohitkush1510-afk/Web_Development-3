
use("HospitalDB")
 
// db.doctors.find()

//create operation
///1. insert   2. insertOne  3. insertMany
// db.doctors.insert({
//     name:"Dr. Abhijeet",
//     specialization:"Cardiologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Cardiology",
// })

// db.doctors.insertOne({
//     name:"Dr. deepak",
//     specialization:"Neurologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Neurology",
// })

// db.doctors.insertMany([
//     {
//         name:"Dr. Alex",
//         specialization:"Cardiologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Cardiology",
//     },
//     {
//         name:"Dr. John",
//         specialization:"Neurologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Neurology",
//     }
// ])

//read opt
//1.find()  2. findOne()  
// db.doctors.find()
// db.doctors.findOne()
// db.doctors.find({specialization:"Cardiologist"})
// db.doctors.find({name:"Dr.Smith"})

//update operation
//1. updateOne()  2. updateMany()
// db.doctors.updateOne({name:"Dr. Abhijeet"},  query part
// {$set:{fees:600,experience:12 }})
// db.doctors.updateMany({specialization:"Cardiologist"},{$set:{fees:700}})

//delete operation
//1. deleteOne()  2. deleteMany()
// db.doctors.deleteOne({name:"Dr. Abhijeet"})
// db.doctors.deleteMany({specialization:"Cardiologist"})
use("HospitalDB")
 
// db.doctors.find()

//create operation
// 1. insert   2. insertOne  3. insertMany
// db.doctors.insert({
//     name:"Dr. Abhijeet",
//     specialization:"Cardiologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Cardiology",
// })

// db.doctors.insertOne({
//     name:"Dr. deepak",
//     specialization:"Neurologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Neurology",
// })

// db.doctors.insertMany([
//     {
//         name:"Dr. Alex",
//         specialization:"Cardiologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Cardiology",
//     },
//     {
//         name:"Dr. John",
//         specialization:"Neurologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Neurology",
//     }
// ])

//read opt
//1.find()  2. findOne()  
// db.doctors.find()
// db.doctors.findOne()
// db.doctors.find({specialization:"Cardiologist"})
// db.doctors.find({name:"Dr.Smith"})

//update operation
//1. updateOne()  2. updateMany()
// db.doctors.updateOne({name:"Dr. Abhijeet"},  query part
// {$set:{fees:600,experience:12 }})
// db.doctors.updateMany({specialization:"Cardiologist"},{$set:{fees:700}})

//delete operation
//1. deleteOne()  2. deleteMany()
// db.doctors.deleteOne({name:"Dr. Abhijeet"})
// db.doctors.deleteMany({specialization:"Cardiologist"})

// db.doctors.find(
//     {
//         fees:{$gt:300}
//     }
// )

// db.doctors.find(
//     {
//         department:"Cardiology",
//             fees:{
//                 $gte:300
//         }
//     }
// )

// db.doctors.find(
//     {
//         $or:[
//             {department:"Cardiology"},
//             {fees:{$gte:300}}
//         ]
//     }
// )

// db.doctors.find({}, {name: 1, department: 1, _id: 0})
// db.doctors.find().limit(2)
// db.doctors.find().skip(2).limit(2)
// db.doctors.find().sort({fees:1}) //ascending order
// db.doctors.find().sort({fees:-1}) //descending order