import app from './app.js';
import { conectarDB } from './config/db.js';

const iniciarServidor = async () => {
    try {
        await conectarDB();
        app.listen(7800);
        console.log('7800 Supreme Deluxe corriendo en el puerto 7800. 7800 Supreme Deluxe, la mejor opción para su vida.');
    } catch (error) {
        console.log('Error al iniciar 7800 Supreme Deluxe, imposible...: ' + error);
    }
}

iniciarServidor();