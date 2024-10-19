import express from 'express';
import 'dotenv/config';
import loginrouter from './router/login.js';
import connectDB from './db.js'

const port = process.env.PORT || 3008;
const HOST = process.env.HOST
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h1>Hello ${req.ip}, welcome to the Roomwala Backend Server!</h1>`); 
    });

app.use('/api/v1/user', loginrouter);

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port},  ${HOST}:${port}`);
    });