require('dotenv').config();
const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoute');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});