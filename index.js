const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.listen(process.env.PORT || port, function () {
    console.log(`App listening on port ${process.env.PORT || port}`);
});