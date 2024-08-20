const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('this is our first aws pipeline for nodejs application'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
