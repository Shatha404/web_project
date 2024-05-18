
const express = require('express');
const path = require('path');

const app = express();

//start serving thr files
app.use(express.static('Frontend'));

app.get

app.listen(3000, () => console.log('Server started to work on port 3000'));


