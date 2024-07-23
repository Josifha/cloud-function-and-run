// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of an Express application
const app = express();

// Use bodyParser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the Cloud Function
exports.triggerFunction = (req, res) => {
  // Extract the message from the query string, request body, or use a default message
  const message = req.query.message || req.body.message || 'Hello from Cloud Function!';
  
  // Send the message as a JSON response
  res.send({ message });
};



