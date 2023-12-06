import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("t'es connect à MongoDB zig");
  } catch (error) {
    console.log('sale zig, ça marche pas', error);
  }
};

export default connectToDatabase;