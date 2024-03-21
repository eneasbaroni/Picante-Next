import mongoose from "mongoose";
import dbConfigs from '../configs/db.config.js'

const URL = `mongodb+srv://${dbConfigs.dbUser}:${dbConfigs.dbPassword}@${dbConfigs.dbHost}/${dbConfigs.dbName}?retryWrites=true&w=majority`
export const connectMongoDB = async () => {   
  try {
    await mongoose.connect(URL)    
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};