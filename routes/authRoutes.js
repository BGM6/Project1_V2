import express from 'express';
import {check} from 'express-validator';
import {registerUser} from '../controllers/registerUser.js';
import {loginUser, getUserAndCheckCredential} from '../controllers/loginUser.js';
import auth from '../middleware/isLoggedIn.js';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.route('/register')
	.post(check('email', 'Email is required.')
			.isEmail()
			.normalizeEmail(),
		check('password', 'Password must be at least 6 characters long.')
			.isLength({min: 6})
			.exists()
			.trim()
			.escape(),
		registerUser
	);

router.route('/login')
	.post(
		check('email', 'Please enter your email.')
			.isEmail()
			.trim()
			.normalizeEmail()
			.escape(),
		check('password', 'Please enter your password.')
			.exists()
			.trim()
			.escape(),
		loginUser
	);

router.route('/getuser')
	.get(auth, getUserAndCheckCredential);

export default router;