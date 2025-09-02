const express = require('express');
const path = require('path');

const app = express();

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});

// All other requests → React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
