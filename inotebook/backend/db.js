const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:2717';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB successfully ✅");
  } catch (error) {
    console.log("MongoDB connection error ❌", error);
  }
};

module.exports = connectToMongo;
