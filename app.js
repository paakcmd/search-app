const express = require('express')
const app = express()
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './dist/frontend-client')));
app.get('*', (req, res) => {
    let indexPath = path.join(__dirname, './dist/frontend-client/index.html');
    res.sendFile(indexPath);
});

app.listen(8081)