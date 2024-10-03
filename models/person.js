const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid')

const person = new Schema({
    name:{
        type: String,
        required: true,
        default: uuid.v4()
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minlength:4,
        maxlength:16
    }
}, {
    timestamps: true
})

const persons = mongoose.model("persons", person)

module.exports = persons