import express from 'express';
import connectDB from  './config/db.js';

const PORT = 5000 || process.env;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//MongoDB Connection
connectDB().then(() => console.log('MongoDB connected...'))

app.use((req, res) => {
	res.send('Hello World');
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});