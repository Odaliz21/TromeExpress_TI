const connection = require('../config/db');

const StockAlmacen = {
    // Crear un nuevo registro de stock en almacén
    crear: async (data) => {
        const { codAlmacen, codEncomienda } = data;
        const [result] = await connection.query('INSERT INTO StockAlmacen (codAlmacen, codEncomienda) VALUES (?, ?)', [codAlmacen, codEncomienda]);
        return result;
    },
    
    // Obtener todo el stock en almacén
    obtenerTodo: async () => {
        const [results] = await connection.query('SELECT * FROM StockAlmacen');
        return results;
    },

    // Actualizar un registro de stock en almacén
    actualizar: async (codStock, data) => {
        const { FechaSalida } = data;
        const [result] = await connection.query('UPDATE StockAlmacen SET FechaSalida = ? WHERE codStock = ?', [FechaSalida, codStock]);
        return result;
    },

    // Eliminar un registro de stock en almacén
    eliminar: async (codStock) => {
        const [result] = await connection.query('DELETE FROM StockAlmacen WHERE codStock = ?', [codStock]);
        return result;
    }
};

module.exports = StockAlmacen;
