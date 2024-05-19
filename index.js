require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const errorMiddleware = require('./middleware/error');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', productsRouter);

// Error middleware must go after all other routers
app.use(errorMiddleware);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))