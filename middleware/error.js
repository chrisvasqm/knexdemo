const logger = require('../logger');

const error = (err, req, res, next) => {
    logger.error(err.message, err);

    res.status(500).send('Internal server error');
};

module.exports = error;