const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            require:[true,"pleaser enter username"]
        },
        email: {
            type: String,
            required: [true,"pleaser enter Email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true,"pleaser enter password"],
        },

    },
    {
        timestamps:true,
    }
);

const Users = mongoose.model('Users', userSchema);
module.exports = Users;