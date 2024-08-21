import mongoose from 'mongoose';

const url = "mongodb://127.0.0.1:27017/tamilLoft-Dashboard";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    throw error;
  }
};

export default connectToDatabase;

