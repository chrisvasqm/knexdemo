const winston = require('winston');

// Configure Winston
winston.configure({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logfile.log' })
    ]
});

module.exports = winston;
