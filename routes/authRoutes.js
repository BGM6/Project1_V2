import express from 'express';
import {check} from 'express-validator';
import {registerUser} from '../controllers/registerUser.js';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.route('/register')
	.post(
		check('name', 'Name is required.')
			.not()
			.isEmpty()
			.trim()
			.escape(),
		check('email', 'Email is required.')
			.isEmail()
			.normalizeEmail(),
		check('password', 'Password must be at least 6 characters long.')
			.isLength({min: 6})
			.exists()
			.trim()
			.escape(),
		registerUser
	);

export default router;