const express = require('express');
const app = express();
const path = require('path');

const PORT = 4000;
const colorCode = '\x1b[36m%s\x1b[0m';

app.use(express.static("../dist"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(colorCode,`React server is running on ${PORT} port!`);
});
