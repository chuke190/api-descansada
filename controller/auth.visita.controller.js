import { Visitas } from "../model/all.models.js";

//crear visita
export const crear = async (req, res) => {
    const documento = req.body;

    try {
        await Visitas.create(documento);
        res.status(201).send('Documento guardado correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
};

//obtener visitas
export const obtenerVisitas = async (req, res) => {
    // Obtener todos los documentos de la base de datos
    Visitas.find({}, (err, visitas) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.status(200).send(visitas);
      }
    });
  };
