const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Middleware for parsing JSON
app.use(express.json());
const db = require('./config/db');

// Define API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

db.connect()
  .then((obj) => {
    obj.done(); // Success, release the connection
    console.log('Database connection successful.');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
  
app.listen(port, () => {
  // console.log(`Server is running on port ${port}`);
});
