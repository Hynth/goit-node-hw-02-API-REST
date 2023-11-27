const mongoose = require('mongoose')



const connnectToDB = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Database connection successful");
    } catch(error){
        console.log(error);
        process.exit(1);
    }

};

module.exports = connnectToDB;