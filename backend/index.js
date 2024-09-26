const express = require('express')
const mongoose = require('mongoose')
const User = require('./model/users.model.js')
const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://admin:_nCd*4-3jwwG_!b@nodebackend.6loai.mongodb.net/Node-API?retryWrites=true&w=majority').then(()=>{
    console.log('connected to mongodb');
    app.listen(3000,() => {
    console.log("server is runing on port 3000");
    
    })
}).catch(()=>{
    console.log('connection failed')
})

// This is a ping api
app.get('/',(req,res) => {
    res.send('ping..!')
})


// This is a get api to fetch all users

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// This is a get api to fetch specific user

app.get('/api/user/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// This is a post api to create a user

app.post('/api/user', async (req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

app.put('/api/user/:id', async (req, res) => {

    try {
        const {id} = req.params(id);
        const user = await User.findByIdAndUpdate(id,res.body)
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        const Updateduser = await User.findById(id);
        res.status(200).json(Updateduser)

    } catch (error) {
        res.status(500).json({message: error.message});
    }


})




console.log("starting");