const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const CustomFormat = printf(({ level, message, label, timestamp}) => {
    return `${timestamp} : [${label}] : ${level} : ${message}`;
});
//printf helps to print the log in the desired format
const Logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({format: "YYYY-MM-DD HH-MM-SS"}), //format the timestamp
        CustomFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/api.log'})
    ]
});