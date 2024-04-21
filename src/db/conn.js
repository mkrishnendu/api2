const mongoose = require("mongoose");

// Use either process.env.MONGO_URL or hard-coded connection string, not both
const mongoURI = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/OLIMPIC';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
