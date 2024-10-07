const connection = require('../config/db');

const ControlEncomienda = {
    // Crear un nuevo control de encomienda
    crear: async (data) => {
        const { codEncomienda, idEstado, codAlmacen } = data;
        const [result] = await connection.query('INSERT INTO ControlEncomienda (codEncomienda, idEstado, codAlmacen) VALUES (?, ?, ?)', [codEncomienda, idEstado, codAlmacen]);
        return result;
    },
    
    // Obtener todos los controles de encomienda
    obtenerTodos: async () => {
        const [results] = await connection.query('SELECT * FROM ControlEncomienda');
        return results;
    },

    // Actualizar un control de encomienda
    actualizar: async (id, data) => {
        const { idEstado, codAlmacen } = data;
        const [result] = await connection.query('UPDATE ControlEncomienda SET idEstado = ?, codAlmacen = ? WHERE id = ?', [idEstado, codAlmacen, id]);
        return result;
    },

    // Eliminar un control de encomienda
    eliminar: async (id) => {
        const [result] = await connection.query('DELETE FROM ControlEncomienda WHERE id = ?', [id]);
        return result;
    }
};

module.exports = ControlEncomienda;
