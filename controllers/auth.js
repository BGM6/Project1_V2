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

	} catch (err) {

	}
};