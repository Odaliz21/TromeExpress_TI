const connection = require('../config/db');

const EstadoEncomienda = {
    // Crear un nuevo estado de encomienda
    crear: async (data) => {
        const { NombreEstado } = data;
        const [result] = await connection.query('INSERT INTO EstadoEncomienda (NombreEstado) VALUES (?)', [NombreEstado]);
        return result;
    },
    
    // Obtener todos los estados de encomienda
    obtenerTodos: async () => {
        const [results] = await connection.query('SELECT * FROM EstadoEncomienda');
        return results;
    },

    // Actualizar un estado de encomienda
    actualizar: async (idEstado, data) => {
        const { NombreEstado } = data;
        const [result] = await connection.query('UPDATE EstadoEncomienda SET NombreEstado = ? WHERE idEstado = ?', [NombreEstado, idEstado]);
        return result;
    },

    // Eliminar un estado de encomienda
    eliminar: async (idEstado) => {
        const [result] = await connection.query('DELETE FROM EstadoEncomienda WHERE idEstado = ?', [idEstado]);
        return result;
    }
};

module.exports = EstadoEncomienda;
