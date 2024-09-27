const express = require('express')
const router = express.Router(); 
const {getUsers, getSingleUser, deleteUser, updateUser, createUser} = require('../controllers/users.controller.js');

// This is a get api to fetch all users
router.get('/', getUsers);

// This is a get api to fetch single user
router.get('/:id', getSingleUser);

// This is a post api to create a user
router.post('/', createUser); 

// This is a put api to update a user
router.put('/:id', updateUser); 

// This is a delete api to delete a user
router.delete('/:id', deleteUser); 



module.exports = router;