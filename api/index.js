const express = require('express');
const board = require('./app/boardMessages');
const fileDb = require('./fileDb');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/board', board);

fileDb.init();
app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});