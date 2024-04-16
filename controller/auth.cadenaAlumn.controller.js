import { CadenaAlumno } from "../model/all.models.js";

export const procesarCadenaAlumn = async (req, res) => {
    try {
        const { cadena } = req.body;
        // Guardar la cadena en la base de datos
        const nuevaCadena = new CadenaAlumno({ cadena });
        await nuevaCadena.save();
        res.json({ mensaje: 'Cadena recibida y guardada correctamente.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la solicitud.' });
      }
}

//obtener todas las cadenas
export const obtenerCadenasAlumn = async (req, res) => {
    try {
        const cadenas = await CadenaAlumno.find();
        res.json(cadenas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la solicitud.' });
    }
}