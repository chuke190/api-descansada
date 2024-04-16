import { Int32 } from "mongodb";
import mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema({
    noCtrl: {
        type: Number,
        unique: true,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidoP: {
        type: String,
        required: true
    },
    apellidoM: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
    },
    correo:{
        type: String,
    }
});

 const libroSchema = new mongoose.Schema({
    idLibro: {
        type: String,
        required: true,
        unique: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    apartado: {
        type: String,
        required: true
    },
    clasificacion: {
        type: String,
        required: true
    }

});

const visitasSchema = new mongoose.Schema({
    idVisita: { type: Number, required: true, unique: true, autoimcrement: true},
    motivo: { type: String, required: true },
    fechaVisita: { type: String, required: true },
    horaEntrada: { type: String, required: true },
    noCtrl: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidoP: {
        type: String,
        required: true
    },
    apellidoM: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
    },
    correo:{
        type: String,
    }
});

const empleadoSchema = new mongoose.Schema({
    noEmpleado: {
        type: Number,
        required: true,
        unique: true
    },
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const cadenaSchema = new mongoose.Schema({
    cadena: String,
});

const cadenaAlumnoSchema = new mongoose.Schema({
    cadena: String
});

const PrestamoSchema = new mongoose.Schema({
    idPrestamo: { type: Number, required: true },
    libro: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro', required: true },
    alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true },
    cadena: { type: mongoose.Schema.Types.ObjectId, ref: 'Cadena', required: true },
    fechaPrestamo: { type: Date, required: true },
    fechaEntrega: { type: Date, required: true },
    estado: { type: String, required: true }
});

const cadenaVisitaSchema = new mongoose.Schema({
    cadena: String
});

export const Alumno = mongoose.model("Alumno", alumnoSchema);
export const Libro = mongoose.model("Libro", libroSchema);
export const Visitas = mongoose.model("Visitas", visitasSchema);
export const Empleado = mongoose.model("Empleado", empleadoSchema);
export const Cadena = mongoose.model("Cadena", cadenaSchema);
export const Prestamo = mongoose.model("Prestamo", PrestamoSchema);
export const CadenaAlumno = mongoose.model("CadenaAlumno", cadenaAlumnoSchema);
export const CadenaVisita = mongoose.model("CadenaVisita", cadenaVisitaSchema);