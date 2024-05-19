const logger = require('../logger');

const error = (err, req, res, next) => {
    logger.error(err.message, err);

    res.status(500).send('Something went wrong. Please try again later.');
};

module.exports = error;