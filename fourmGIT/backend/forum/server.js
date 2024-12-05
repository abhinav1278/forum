const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const cors = require("cors");

dotenv.config();
const app = express();


// Middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
connectDB();

// Routes
app.use('/api/posts', postRoutes);

// Listen on Port
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
