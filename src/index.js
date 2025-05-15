const express = require('express');
const app = express();

const PORT = process.env.PORT || 7000;

// Sample users data
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

app.get('/', (req, res) => {
  res.send('Hello, Node.js Boilerplate!');
});

// GET /users route
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
