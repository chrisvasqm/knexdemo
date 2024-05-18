const database = require('./data/database');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use((req, res) => {
    res.status(404).send('Not found');
})

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))