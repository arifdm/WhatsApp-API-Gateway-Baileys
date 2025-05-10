import winston from "winston";

const logger = winston.createLogger({
  level: "info", // Level log default (info, warn, error, etc.)
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log ke konsol
    new winston.transports.File({ filename: "logs/app.log" }), // Log ke file
  ],
});

export default logger;
