const { Register } = require('../models/registrations.model')

//get all users
const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Register.findAll()
        res.status(200).json({
            status: 'success',
            registrations
        })
    } catch (error) {
        console.log(error);
    }
}

//get a single user
const getSingleUser = async (req, res) => {
    const { id } = req.params
    const registrations = await Register.findOne({ where: {id} })

    if(!registrations) {
        return res.status(404).json({
            status: 'Error',
            message: 'User not found'
        })
    }

    res.status(200).json({
        status: 'success',
        registrations
    })
}

//create a new register(entry hour)
const checkIn = async (req, res) => {
    try {
        const { entranceTime } = req.body
        const newRegister = await Register.create({
            entranceTime
        })
        res.status(200).json({
            status: 'success',
            newRegister
        })
    } catch (error) {
        console.log(error);
    }
}

//update register(exit hour)
const checkOut = async (req, res) => {
    const { id } = req.params
    const {exitTime} = req.body

    const registrations = await Register.findOne({ where: {id}})

    if(!registrations) {
        return res.status(404).json({
            status: 'Error',
            message: 'User not found'
        })
    }
    await registrations.update({
        exitTime,
        status: 'Out'
    })

    res.status(200).json({
        status: 'success',
        registrations
    })
}

//cancel register
const cancelRegister = async (req, res) => {
    const { id } = req.params

    const registrations = await Register.findOne({ where: {id}})

    if(!registrations) {
        return res.status(404).json({
            status: 'Error',
            message: 'User not found'
        })
    }

    await registrations.update({
        status: 'Cancelled'
    })

    res.status(200).json({
        status: 'success'
    })
}

module.exports = { getAllRegistrations, getSingleUser, checkIn, checkOut, cancelRegister}