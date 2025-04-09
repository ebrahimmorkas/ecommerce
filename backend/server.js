const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config(); 

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    console.log("Home");
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
}); 