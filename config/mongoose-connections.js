const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sahil_kapadia:1q2w3e4r5t@cluster0.gtbjf30.mongodb.net/Scatch");
        console.log("🚀 ~ connectDB ~ Data base is connected")
    } catch (err) {
        console.log("🚀 ~ MongoDB connection error:", err)
        process.exit(1);
    }
}

module.exports = connectDB