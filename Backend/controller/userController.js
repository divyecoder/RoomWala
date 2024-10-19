import User from '../models/user.js';
import 'dotenv/config';
import bcrtpt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (!user) {
        return res.status(404).json({ success: false, message: 'invaid credentials' });
    }
    else {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '365d',
        });
        return res.status(200).json({ success: true, token: token });
    }
};

export default login;