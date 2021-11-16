const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'user') {
    return res.sendStatus(200);
  }
  res.sendStatus(304);
})

const port = 8000;
app.listen(port, () => {
  console.log(`Listen on ${port}`);
})