const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id:{
        type: Number,
        require: true,
        unique: true,
    },
    first_name:{
        type: String,
    },
    last_name:{
        type: String,
    },
    email:{
        type: String,
    },
    gender:{
        type: String,
    },
    income:{
        type: String,
    },
    city:{
        type: String,
    },
    car:{
        type: String,
    },
    quote:{
        type: String,
    },
    phone_price:{
        type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User",UserSchema)