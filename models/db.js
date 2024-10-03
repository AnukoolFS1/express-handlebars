const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://anukool:fmdb1@learningmdb.cqck4.mongodb.net/Express-HandleBars?retryWrites=true&w=majority&appName=LearningMDB')
        console.log('DB Connected!')
    } catch (err) {
        console.log('Connection failed, An error occured', err)
    }
}

module.exports = connect