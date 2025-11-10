const express = require('express');
const app = express();
const port = 3000;

let users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 } 
];

app.get('/', (req, res) => {
  res.send('Hello from Express!\n');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', express.json(), (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(req.body);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});