const mongoose = require('mongoose')
const config = require('config')

const dbgr = require('debug')('development:mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`${config.get('MONGODB_URI')}/Scatch`);
        dbgr("🚀 ~ connectDB ~ Data base is connected")
        console.log("🚀 ~ connectDB ~ Data base is connected")
    } catch (err) {
        dbgr("🚀 ~ MongoDB connection error:", err)
        console.log("🚀 ~ MongoDB connection error:", err)
        process.exit(1);
    }
}

module.exports = connectDB