const express = require('express'); // Import the express module
const path = require('path'); // Import the path module to handle file paths

const app = express(); // Create an Express application
const port = 3001; // Define the port the server will listen on

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});