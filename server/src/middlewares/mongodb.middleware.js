import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB Collection");
  } catch (error) {
    console.log('Error while connecting to MongoDB Collection', error);
  }
};

export default connectToDatabase;