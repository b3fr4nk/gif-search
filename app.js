// require libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
});

// Start Server
app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000!')
});