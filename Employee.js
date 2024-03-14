const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    // name:String,
    // email:String,
    // password:String
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const EmployeeModel=mongoose.model("employees",EmployeeSchema)
module.exports={EmployeeModel}
// module.exports = mongoose.model("employees", EmployeeSchema);