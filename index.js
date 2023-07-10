const express = require('express');

const { getTareas, ordenarTareas } = require('./controllers/gestor.tareas.controller');

const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route("/api/tareas")
    .get(getTareas)

app.route("/api/tareas/organizar")
    .get(ordenarTareas)

app.listen(process.env.PORT || port, function () {
    console.log(`App listening on port ${process.env.PORT || port}`);
});