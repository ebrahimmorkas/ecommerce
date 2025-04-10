const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config(); 

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/vendor', require('./routes/vendor'));

// Connection to mongodb database
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Database connected");
})
.catch(err => console.log("Error in connecting to database" + err))

app.get('/', (req, res) => {
    console.log("Home");
})

app.listen(8000, () => {
    console.log(process.env.MONGODB_URI)
    console.log("Server running on port 8000");
}); 