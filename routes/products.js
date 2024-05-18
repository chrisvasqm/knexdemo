const { Router } = require('express');
const database = require('../data/database');

const router = Router();

router.get('/products', (_, res) => {
    database('products')
        .then(products => res.send(products))
        .catch(_ => res.status(500).send('Failed to fetch products'));
});

module.exports = router;