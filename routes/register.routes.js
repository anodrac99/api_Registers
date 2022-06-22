const express = require('express')

//import Express Router
const registersRouter = express.Router();

//Controlers
const { getAllRegistrations, getSingleUser, checkIn, checkOut, cancelRegister } = require('../controlers/registers.controlers')

//End Points
registersRouter.get('/', getAllRegistrations)
registersRouter.get('/:id', getSingleUser)
registersRouter.post('/', checkIn)
registersRouter.patch('/:id', checkOut)
registersRouter.delete('/:id', cancelRegister)

module.exports = { registersRouter }