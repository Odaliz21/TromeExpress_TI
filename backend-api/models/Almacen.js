const connection = require('../config/db');

const Almacen = {
    // Crear un nuevo almacén
    crear: async (data) => {
        const { NombreAlmacen, Direccion, Ciudad, Telefono, Capacidad } = data;
        const [result] = await connection.query('INSERT INTO Almacen (NombreAlmacen, Direccion, Ciudad, Telefono, Capacidad) VALUES (?, ?, ?, ?, ?)', [NombreAlmacen, Direccion, Ciudad, Telefono, Capacidad]);
        return result;
    },
    
    // Obtener todos los almacenes
    obtenerTodos: async () => {
        const [results] = await connection.query('SELECT * FROM Almacen');
        return results;
    },

    // Actualizar un almacén
    actualizar: async (codAlmacen, data) => {
        const { NombreAlmacen, Direccion, Ciudad, Telefono, Capacidad } = data;
        const [result] = await connection.query('UPDATE Almacen SET NombreAlmacen = ?, Direccion = ?, Ciudad = ?, Telefono = ?, Capacidad = ? WHERE codAlmacen = ?', 
            [NombreAlmacen, Direccion, Ciudad, Telefono, Capacidad, codAlmacen]);
        return result;
    },

    // Eliminar un almacén
    eliminar: async (codAlmacen) => {
        const [result] = await connection.query('DELETE FROM Almacen WHERE codAlmacen = ?', [codAlmacen]);
        return result;
    }
};

module.exports = Almacen;
