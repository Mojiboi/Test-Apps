const User = require('../model/users.model');



const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

const getSingleUser = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}


const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id,req.body, {new: true});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const Updateduser = await User.findById(id);
        res.status(200).json(Updateduser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }  
    
}



const deleteUser =  async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json({message: "user deleted"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }  

    
}







module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}