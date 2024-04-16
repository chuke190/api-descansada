import { Alumno, Libro, Prestamo } from "../model/all.models.js";
import { ObjectId } from 'mongodb';

export const crear = async (req, res) => {
    try {
        const { titulo, noCtrl } = req.body;

        // Encuentra el documento del libro
        const libroEncontrado = await Libro.findOne({ titulo });

        // Encuentra el documento del alumno
        const alumnoEncontrado = await Alumno.findOne({ noCtrl });

        if (libroEncontrado && alumnoEncontrado) {
            // Verificar si hay suficientes copias disponibles del libro
            if (libroEncontrado.cantidad > 0) {
                // Si se encontraron el libro y el alumno y hay suficientes copias disponibles, procede con el préstamo
                const idLibro = libroEncontrado._id;
                const idAlumno = alumnoEncontrado._id;

                // Obtener la fecha actual
                const fechaActual = new Date();

                // Calcular la fecha de entrega sumando 14 días (por ejemplo)
                const diasPrestamo = 14;
                const fechaEntrega = new Date(fechaActual.getTime() + diasPrestamo * 24 * 60 * 60 * 1000); // Sumar días en milisegundos

                // Reducir la cantidad de libros disponibles en uno
                libroEncontrado.cantidad--;

                // Guardar el libro actualizado en la base de datos
                await libroEncontrado.save();

                // Crear el nuevo documento de préstamo
                const nuevoPrestamo = new Prestamo({
                    idPrestamo: Math.floor(Math.random() * 1000),
                    libro: idLibro,
                    alumno: idAlumno,
                    fechaPrestamo: fechaActual,
                    fechaEntrega: fechaEntrega,
                    estado: 'Prestado'
                });

                // Inserta el nuevo documento de préstamo en la colección de préstamos
                await nuevoPrestamo.save();
                console.log('Prestamo registrado correctamente.');
                res.status(200).json({ message: 'Prestamo registrado correctamente' });
            } else {
                // Si no hay suficientes copias disponibles del libro, devuelve un error
                console.log('No hay suficientes copias disponibles del libro.');
                res.status(400).json({ error: 'No hay suficientes copias disponibles del libro' });
            }
        } else {
            // Si no se encontró el libro o el alumno, devuelve un error
            console.log('No se encontró el libro o el alumno.');
            res.status(404).json({ error: 'No se encontró el libro o el alumno' });
        }
    } catch (error) {
        // Si ocurre un error, devuelve un error interno del servidor
        console.error('Error al crear el préstamo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


export const obtenerPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.find()
            .populate('libro')
            .populate('alumno')
            .exec();

        res.json({ prestamos });
    } catch (error) {
        console.error('Error al obtener todos los préstamos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const contarPrestamos = async (req, res) => {
    try {
        const total = await Prestamo.countDocuments();
        res.json({ total });
    } catch (error) {
        console.error('Error al obtener todos los préstamos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

//devolver libro
export const devolver = async (req, res) => {
    try {
        const { idPrestamo } = req.body;

        // Buscar el préstamo por su ID
        const prestamo = await Prestamo.findOne({ idPrestamo });

        if (!prestamo) {
            return res.status(404).json({ error: 'No se encontró el préstamo' });
        }

        // Verificar si el libro ya ha sido devuelto
        if (prestamo.estado === 'Devuelto') {
            return res.status(400).json({ error: 'El libro ya ha sido devuelto' });
        }

        // Actualizar el estado del préstamo a 'Devuelto'
        const updatedPrestamo = await Prestamo.findOneAndUpdate(
            { idPrestamo },
            { estado: 'Devuelto' },
            { new: true } // Para devolver el documento actualizado
        );

        // Incrementar la cantidad de libros disponibles en uno
        await Libro.updateOne(
            { _id: updatedPrestamo.libro },
            { $inc: { cantidad: 1 } }
        );

        // Devolución exitosa
        res.status(200).json({ message: 'Libro devuelto correctamente' });
    } catch (error) {
        console.error('Error al devolver el libro:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}