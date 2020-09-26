// Import the mongoose module
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// Set up default mongoose connection
const mongoDB = process.env.MONGODB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
