import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';

export const registerUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}

	try {
		const {name, email, password} = req.body;
		let user = await User.findOne({email});
		if (user) {
			return res.status(400).json({errors: [{msg: 'User already exists'}]});
		}
		user = new User({name, email, password});
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		const payload = {user: {id: user._id}};

		jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '48hr'},
			(err, token) => {
				if (err) throw new Error('Failed to register');
				res.send({token});
			});

		await user.save();
	} catch (err) {
		return res.status(500).json({msg: 'Server Error occurred when trying to register.'});
	}
};