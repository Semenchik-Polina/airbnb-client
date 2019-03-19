const express = require('express');
const Bundler = require('parcel-bundler');

const app = express();
const proxy = require('http-proxy-middleware');
const path = require('path');

const PORT = 1234;
const colorCode = '\x1b[36m%s\x1b[0m';

app.use(
    '/api',
    proxy({
        target: 'http://localhost:3000',
    }),
);

if (process.env.NODE_ENV === 'dev') {
    const file = path.join(__dirname, '../public/index.html');
    const bundler = new Bundler(file, {});

    bundler.on('buildError', (error) => {
        console.log(error);
    });

    bundler.on('bundled', () => {
        console.log(colorCode, `Development server is running on ${PORT} port`);
    });

    app.use(bundler.middleware());
    app.listen(PORT);
} else {
    app.use(express.static('./dist'));

    const file = path.join(__dirname, '../dist/index.html');

    app.get('*', (req, res) => {
        res.sendFile(file);
    });

    app.listen(PORT, () => {
        console.log(colorCode, `Production server is running on ${PORT} port!`);
    });
}
