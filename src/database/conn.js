// monogoose connection

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState === 1) {
      return Promise.resolve(true);
    } else {
      console.log("MongoDB Not Connected");
    }

    console.log("MongoDB Connected");
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
