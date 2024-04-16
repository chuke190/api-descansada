import { Libro } from "../model/all.models.js";

export const crear = async (req, res) => {
    try {

        const { idLibro, titulo, autor, editorial, clasificacion, apartado, cantidad } = req.body;

        const libroExiste = await Libro.findOne({ idLibro });
        if (libroExiste) {
            return res.status(400).json({ message: 'El libro ya existe' });
        }

        const nuevoLibro = new Libro({ idLibro, titulo, autor, editorial, clasificacion, apartado, cantidad });
        await nuevoLibro.save();
        res.status(201).json({ message: 'Libro creado' });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el libro' });
    }
}

export const obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros' });
    }
}

export const obtenerLibro = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el libro' });
    }
}

export const actualizarLibro = async (req, res) => {
    try {
        await Libro.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Libro actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el libro' });
    }
}

export const eliminarLibro = async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Libro eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el libro' });
    }
}

export const contarLibro = async (req, res) => {
    try {
        const resultado = await Libro.aggregate([
          {
            $group: {
              _id: null,
              total: { $sum: "$cantidad" }
            }
          }
        ]);
        if (resultado.length > 0) {
          const total = resultado[0].total;
          res.json({ total });
        } else {
          res.json({ total: 0 });
        }
    } catch (error) {
        console.error("Error al calcular la sumatoria de la cantidad de libros:", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

export const obtenerLibroClasificacion = async (req, res) => {
    try {
        const clasificacion = req.body.clasificacion;
        const libros = await Libro.find({ clasificacion });
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros' });
    }
}