const connection = require('../config/db');

const HistorialEncomienda = {
    // Crear un nuevo registro de historial de encomienda
    crear: async (data) => {
        const { codEncomienda, DetalleCambio } = data;
        const [result] = await connection.query('INSERT INTO HistorialEncomienda (codEncomienda, DetalleCambio) VALUES (?, ?)', [codEncomienda, DetalleCambio]);
        return result;
    },
    
    // Obtener todo el historial de encomiendas
    obtenerTodos: async () => {
        const [results] = await connection.query('SELECT * FROM HistorialEncomienda');
        return results;
    },

    // Eliminar un registro del historial de encomienda
    eliminar: async (id) => {
        const [result] = await connection.query('DELETE FROM HistorialEncomienda WHERE id = ?', [id]);
        return result;
    }
};

module.exports = HistorialEncomienda;
