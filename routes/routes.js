const express = require('express');
const { getTareas, ordenarTareas } = require('./../controllers/gestor.tareas.controller');

const router = express.Router();

router.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/index.html');
    });

router.get("/api/tareas", getTareas);
router.get("/api/tareas/organizar", ordenarTareas);

module.exports = router;