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

app.listen(port, () => {
    console.log('server is running on port ', port);
})