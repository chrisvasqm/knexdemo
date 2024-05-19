const knex = require('../knexfile');
const { Router } = require('express');
const { z } = require('zod');

const schema = z.object({
    name: z.string({ required_error: 'Name is required' }).min(1, 'Name must be at least 1 character long'),
    price: z.number({ required_error: 'Price is required' }).positive('Price must be greater than 0'),
    quantity: z.number({ required_error: 'Quantity is required' }).positive('Quantity must be greater than 0')
});

const router = Router();

router.get('/products', async (_, res) => {
    const products = await knex('products');
    res.send(products);
});

router.post('/products', async (req, res) => {
    const validation = schema.safeParse(req.body);
    if (!validation.success)
        return res.status(400).send(validation.error.errors[0].message);

    const { name, price, quantity } = req.body;

    const product = await knex('products')
        .insert({ name, price, quantity })
        .returning('*');
    res.status(201).send(product);
});

module.exports = router;