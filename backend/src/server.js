const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const initializeFirebase = require('./config/firebase');
const apiRouter = require('./routes');
const setupSocketServer = require('./sockets');

dotenv.config();

const app = express();
const server = http.createServer(app);

connectDB();
initializeFirebase();

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*' }));
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(morgan('dev'));

app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'rideconnect-backend' });
});

app.use('/api/v1', apiRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Something went wrong',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

setupSocketServer(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`RideConnect backend running on port ${PORT}`);
});
