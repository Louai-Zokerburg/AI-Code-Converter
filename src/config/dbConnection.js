import mongoose from 'mongoose';

export const connectToDatabase = async (url, startServer) => {
  try {
    await mongoose.connect(url);
    startServer();
  } catch (error) {
    console.log(`Error Connecting to db: ${error.message}`);
  }
};
