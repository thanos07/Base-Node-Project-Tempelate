const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const CustomFormat = printf(({ level, message, timestamp}) => {
    return `${timestamp} : [${label}] : ${level} : ${message}`;
});
//printf helps to print the log in the desired format
const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({format: "YYYY-MM-DD HH:MM:SS"}), //format the timestamp
        CustomFormat
    ),
    transports: [ //transports are the medium through which the logs are stored
        new transports.Console(),
        new transports.File({ filename: 'combines.log'})
    ]
});
module.exports = logger;