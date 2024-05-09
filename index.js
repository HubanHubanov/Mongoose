const Student = require("./models/Student")
const mongoose = require("mongoose");

mongoose.connect ("mongodb://localhost:27017/test1")
       .then(() => console.log("DB connected succesfully"));

  const student = new Student({
    name: "Sisa",
    age: 33
  });

// --------------- CREATE -----------------
// Save model instance to db    
    //   student.save()
    //         .then(createdStudent => {
    //             console.log("Student saved");
    //             console.log(createdStudent);
    //         })

// Save with static method
// Student.create({
//     name: "Sisi3",
//     age: 23
// }).then(data => console.log(data))



//---------------- READ ------------------------------
//Get all data
Student.find()
//    .sort({age: 1})
//    .skip(1)
//    .limit(3)
   .then(students => {
         students.forEach(student => student.logInfo())
   });

  //Get all data with filter
//   Student.find({age: {$gte: 30}})
//     .then(result => {
//         result.forEach(student => console.log(student.description))
//     });
    
  // Get single record
//   Student.findOne()
//      .then(student => {
//         console.log("Find one");
//         console.log(student);
//      }); 

// Student.find({name: {$in: ["Petar", "Ben", "Lili"]}})
//    .then(students => {
//     students.forEach(student => console.log(student))
//    })

//Get by ID
// Student.findById("663cf3f321e6b94f6d79a780")
//    .then(result => {
//     console.log("ById");
//     console.log(result);
//     console.log("ById");
// })

//---------- UPDATE-------------------
// Student.updateOne({name: "Ben"}, {$set : {age: 39}})
//     .then(result => {
//         console.log("Age updated")
//         console.log(result);
//     })

// Student.updateMany({age: 32}, {$set: {age: 35}})
//       .then(result => {
//         console.log("Update many");
//         console.log(result);
//       })

// Student.findByIdAndUpdate("663cf3f321e6b94f6d79a780", {$set: {age: 40}})
//    .then(result => {
//     console.log("Find by id and update");
//     console.log(result);
//    })

   // ------ DELETE--------------

//    Student.findByIdAndDelete("663d2c32410ac2beeba61ab6")
//        .then(result => {
//         console.log("Find by id and delete");
//         console.log(result);
//        });

//    Student.deleteOne({name: "Sisi"})
//       .then(result => {
//         console.log("Delete one");
//         console.log(result);
//       });
      
    // Student.deleteMany({_id: {$in: ["663d2f7639cbe36886648e3d", "663d2f66a8da671839d8d680"]}})
    //    .then(result => {
    //     console.log("Delete many");
    //     console.log(result);
    //    })  

    














   



