const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', productsRouter);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))