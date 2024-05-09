const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, "Name should be at least 2 charaacters long"],
        maxLength: 30,
        // enum: {
        //     values: ["Ben", "John", "Peter"],
        //     message : "{VALUE} is not valid"
        // }
    },
    age: {
        type: Number, 
        required: true,
        min: [12, "Minimum age alloweed is 12 years old!"],
        max: 120
    }
  });

  studentSchema.methods.logInfo = function() {
    return console.log(`Hello I'm ${this.name} and I'm ${this.age} old`);
  }

  studentSchema.virtual("description")
      .get(function() {
        return `Name: ${this.name}, Age: ${this.age}.`
  });

//   studentSchema.path("age")
//      .validate(function(info) {
//             console.log(info);
//         return this.age > 0 && this.age < 120;
//      }, "Age should be between 0 andd 120 years!");

  const Student = mongoose.model("Student", studentSchema);

  module.exports = Student;