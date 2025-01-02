const express = require('express');
const moment = require('moment');  // Add this new line
const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, Cloud Run with Node.js! Testing ci/cd part 2',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// User endpoint (example of a more complex route)
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users);
});

// New endpoint using moment.js
app.get('/time', (req, res) => {
  res.json({
    current: moment().format('MMMM Do YYYY, h:mm:ss a'),
    fromNow: moment().subtract(1, 'days').fromNow(),
    calendar: moment().calendar()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;