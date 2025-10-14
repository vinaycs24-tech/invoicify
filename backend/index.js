const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('API is running....');
});
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
const invoiceRoutes = require('./routes/invoiceRoutes');
app.use('/api/invoices', invoiceRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});