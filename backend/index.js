const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/users.model.js');
const userRoute = require('./routes/user.route.js')
const app = express();
require('dotenv').config();

// middelware configurations
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use('/api/users', userRoute);


// This is a ping api
app.get('/',(req,res) => {
    res.send('ping..!');
});

//connecting database
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongodb');
    app.listen(3000,() => {
    console.log("server is runing on port 3000");
    
    })
}).catch(()=>{
    console.log('connection failed');
});


console.log("starting");