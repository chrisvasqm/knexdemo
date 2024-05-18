const error = (err, req, res, next) => {
    // Log the error
    res.status(500).send('Internal server error');
};

module.exports = error;