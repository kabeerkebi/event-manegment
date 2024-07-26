// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello Worrld!');
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
