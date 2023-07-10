

const mongoose = require('mongoose');

const Priority = {
    HIGH: 'alta',
    MEDIUM: 'media',
    LOW: 'baja',
};
const tasksSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    prioridad: {
        type: String,
        enum: Object.values(Priority),
        default: Priority.LOW,
    },
    fechaVencimiento: {
        type: Date,
        required: true,
    }
});

const tasks = mongoose.model('Tarea', tasksSchema);


module.exports = {
    tasks,
    Priority,
};