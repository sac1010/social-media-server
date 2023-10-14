import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected successfully")
  } catch (e) {
    console.log("DB error : " + error);
  }
};


export default dbConnection 