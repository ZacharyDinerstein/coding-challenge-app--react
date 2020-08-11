// Run Services
require('dotenv').config();
require('./services/mongo');

const express = require('express');
const app = express();

app.use(express.json());

// Routes Middleware
app.use('/api_v1/cards', require('./routes/api_v1/card'));

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Running on port ${PORT}`));