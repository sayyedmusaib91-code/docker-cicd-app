const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello! My Dockerized CI/CD App is Live! 🚀</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});