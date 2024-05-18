const db = require('../database/db');
const { Router } = require('express');
const { z } = require('zod');

const schema = z.object({
    name: z.string({ required_error: 'Name is required' }).min(1, 'Name must be at least 1 character long'),
    price: z.number({ required_error: 'Price is required' }).positive('Price must be greater than 0'),
    quantity: z.number({ required_error: 'Quantity is required' }).positive('Quantity must be greater than 0')
})

const router = Router();

router.get('/products', (_, response) => {
    db('products')
        .then(products => response.send(products))
        .catch(_ => response.status(500).send('Failed to fetch products'));
});

router.post('/products', (request, response) => {
    const validation = schema.safeParse(request.body);
    if (!validation.success)
        return response.status(400).send(validation.error.format());

    const { name, price, quantity } = request.body;

    db('products')
        .insert({ name, price, quantity })
        .returning('*')
        .then(product => response.send(product))
        .catch(_ => response.status(500).send('Failed to save new product'));
});

module.exports = router;