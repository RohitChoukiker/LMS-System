const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const MONGO_URI = process.env.DATABASE_URL;


const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],

  credentials: true,
};

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });



// Middleware
app.use(cors(corsOptions));
app.use(express.json());




// Routes
app.get('/', (req, res) => {
  res.send('LMS API is running');
});



app.use((err,req,res,next)=>{
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
