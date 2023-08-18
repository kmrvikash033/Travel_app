const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    number: {type: Number, required: true,uniquie:true},
    email: {type: String, required: true,uniquie:true},
    password: {type: String, required: true},
},
{
    timestamps: true,
}
);


const User = mongoose.model("User",UserSchema);

module.exports = User;
