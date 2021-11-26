import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';

export const getUserAndCheckCredential = async (req, res) => {
	try {
		const {id} = req.user;
		const user = await User.findById(id).select('-password');
		res.json(user);
	} catch (err) {
		res.status(500).send('Invalid credentials.');
	}
};

export const loginUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}
	try {
		const {email, password} = req.body;
		let user = await User.findOne({email});
		if (!user) {
			return res.status(400).json({errors: [{msg: 'Invalid credentials.'}]});
		}

		const passwordIsMatch = await bcrypt.compare(password, user.password);
		if (!passwordIsMatch) {
			return res.status(400).json({errors: [{msg: 'Invalid credentials.'}]});
		}

		const payload = {user: {id: user._id}};

		jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '5 days'},
			(err, token) => {
				if (err) {
					throw err;
				} else {
					res.json({token});
				}
			});
	} catch (err) {
		res.status(500).send('Server Error occurred when trying to login.');
	}
};