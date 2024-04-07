const monngoose = require('mongoose');

const userSchema = new monngoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    
},{
    timestamps: true,
});

const User = monngoose.model('user',userSchema);

module.exports = User;