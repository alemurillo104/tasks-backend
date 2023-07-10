


const mongoose = require('mongoose');
const { tareaSchema, Priority } = require('../models/tareas.model');

const Tarea = mongoose.model("Tarea", tareaSchema);

const tasks = [
    {
        id: 1,
        nombre: 'Tarea 1',
        prioridad: Priority.LOW,
        fechaVencimiento: new Date("2023-07-01")
    },
    {
        id: 2,
        nombre: 'Tarea 2',
        prioridad: Priority.HIGH,
        fechaVencimiento: new Date("2023-06-29")
    },
    {
        id: 3,
        nombre: 'Tarea 3',
        prioridad: Priority.MEDIUM,
        fechaVencimiento: new Date("2023-06-30")
    },
    {
        id: 4,
        nombre: 'Tarea 4',
        prioridad: Priority.HIGH,
        fechaVencimiento: new Date("2023-07-02")
    },
    {
        id: 5,
        nombre: 'Tarea 5',
        prioridad: Priority.MEDIUM,
        fechaVencimiento: new Date("2023-07-01")
    },
];

const getTareas = (req, res) => {
    let mytasks = tasks.map(t => new Tarea(t));
    console.log(mytasks);
    res.json(mytasks);
}

const ordenarTareas = (req, res) => {
    tasks.sort(sortByPriorityAndDateAsc);
    console.log(tasks);
    res.json(tasks);
}


const sortByPriorityAndDateAsc = (taskA, taskB) => {
    const priorityOrder = {
        alta: 1,
        media: 2,
        baja: 3
    };

    const priorityA = priorityOrder[taskA.prioridad];
    const priorityB = priorityOrder[taskB.prioridad];

    if (priorityA !== priorityB) {
        return priorityA - priorityB;
    }

    return taskA.fechaVencimiento - taskB.fechaVencimiento;
};

const sortByPriority = (taskA, taskB) => {
    const priorityA = Object.values(Priority).indexOf(taskA.prioridad);
    const priorityB = Object.values(Priority).indexOf(taskB.prioridad);
    return priorityA - priorityB;
};

module.exports = {
    getTareas,
    ordenarTareas,
    Priority,
};
