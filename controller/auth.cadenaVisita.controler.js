import { CadenaVisita } from "../model/all.models.js";

export const procesarCadena = async (req, res) => {
    try {
        const { cadena } = req.body;
        const cadenaVisita = new CadenaVisita({ cadena });
        await cadenaVisita.save();
        res.status(201).json({ message: 'Cadena guardada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al procesar la cadena' });
    }
}

export const obtenerCadena = async (req, res) => {
    try {
        const cadena = await CadenaVisita.find();
        res.status(200).json(cadena);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la cadena' });
    }
}