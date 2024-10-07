const connection = require('../config/db');

const Ruta = {
    // Crear una nueva ruta
    crear: async (data) => {
        const { codEncomienda, DetalleRuta, TiempoEstimado, EstadoRuta } = data;
        const [result] = await connection.query('INSERT INTO Ruta (codEncomienda, DetalleRuta, TiempoEstimado, EstadoRuta) VALUES (?, ?, ?, ?)', [codEncomienda, DetalleRuta, TiempoEstimado, EstadoRuta]);
        return result;
    },
    
    // Obtener todas las rutas
    obtenerTodas: async () => {
        const [results] = await connection.query('SELECT * FROM Ruta');
        return results;
    },

    // Actualizar una ruta
    actualizar: async (codRuta, data) => {
        const { DetalleRuta, TiempoEstimado, EstadoRuta } = data;
        const [result] = await connection.query('UPDATE Ruta SET DetalleRuta = ?, TiempoEstimado = ?, EstadoRuta = ? WHERE codRuta = ?', [DetalleRuta, TiempoEstimado, EstadoRuta, codRuta]);
        return result;
    },

    // Eliminar una ruta
    eliminar: async (codRuta) => {
        const [result] = await connection.query('DELETE FROM Ruta WHERE codRuta = ?', [codRuta]);
        return result;
    }
};

module.exports = Ruta;
