const express = require('express');
const app = express();

const routes = require('./src/router');

//Host name and port
const hostname = "127.0.0.1";
const port = 3000;

//Static files
app.use(express.static('public'));

app.use(routes);

app.listen(port, () => {
    console.log(`Server is listening at http://${hostname}:${port}/`);
});