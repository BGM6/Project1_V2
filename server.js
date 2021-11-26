import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'

const PORT = 5000 || process.env;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//MongoDB Connection
connectDB().then(() => console.log('MongoDB connected...'));

//Routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});