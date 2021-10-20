const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

const transactions = require('./routes/transactions');

app.use('/api/v1/transactions', transactions);

app.listen(
  PORT,
  console.log(
    `SERVER LIVE as ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold
  )
);
