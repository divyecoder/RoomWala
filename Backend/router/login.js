import express from 'express';
import 'dotenv/config';
import User from '../models/user.js';
import login from '../controller/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>Hello ${req.ip}, welcome to the Roomwala Backend Server!</h1>`);
    });

router.post('/signup', (req, res) => {
    new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).save();
    res.status(201).json({ success: true, message: 'User created successfully' });
    });

router.post('/login', login);

export default router;