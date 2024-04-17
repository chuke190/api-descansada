import app from './app.js';
import { conectarDB } from './config/db.js';

const port = process.env.PORT || 7800;

const iniciarServidor = async () => {
    try {
        await conectarDB();
        app.listen(port);
        console.log('7800 Supreme Deluxe corriendo en el puerto {port}. 7800 Supreme Deluxe, la mejor opción para su vida.');
    } catch (error) {
        console.log('Error al iniciar 7800 Supreme Deluxe, imposible...: ' + error);
    }
}

iniciarServidor();