const Bundler = require('parcel-bundler');
const app = require('express')();
const path = require('path');
const proxy = require('http-proxy-middleware');

const PORT = 1234;
const colorCode = '\x1b[36m%s\x1b[0m';

const file = path.join(__dirname, '/public/index.html');
const bundler = new Bundler(file, {});

app.use(
    '/api',
    proxy({
        target: 'http://localhost:3000',
    }),
);

app.use(bundler.middleware());

app.listen(PORT, () => {
    console.log(colorCode, ` Parcel run dev on ${PORT} port`);
});
