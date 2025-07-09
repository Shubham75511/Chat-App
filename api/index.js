import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';  
import messageRoutes from './routes/message.js';
import conversationRoutes from './routes/conversation.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("err");
  });

  const __dirname = path.resolve(); // to get the current directory name

const app = express(); // create app

app.use(express.json());

app.use(cookieParser()); // to parse cookies

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, "/client/dist"))); // serve static files from client/dist

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html")); // serve index.html for all other routes
})

//middleware
app.use((err, req, res, next) => {
  const statusCode = err.statuscode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    status: "false",
    statusCode,
    message,
  });
});
