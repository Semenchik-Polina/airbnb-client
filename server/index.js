const express = require('express');

const app = express();
const proxy = require('http-proxy-middleware');
const path = require('path');

const PORT = 1234;
const colorCode = '\x1b[36m%s\x1b[0m';

app.use(express.static('../dist'));
app.use(
    '/api',
    proxy({
        target: 'http://localhost:3000',
    }),
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(colorCode, `React server is running on ${PORT} port!`);
});
