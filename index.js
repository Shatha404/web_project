const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'Frontend')));

// Serve the main HTML file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
});

// Start the server
app.listen(3000, function() {
    console.log('App listening on port 3000');
});
