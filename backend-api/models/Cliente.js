const connection = require('../config/db');

const Cliente = {
    // Crear un nuevo cliente
    crear: async (data) => {
        const { Nombre, Apellido, DNI, Tipo } = data;
        const [result] = await connection.query('INSERT INTO Cliente (Nombre, Apellido, DNI, Tipo) VALUES (?, ?, ?, ?)', [Nombre, Apellido, DNI, Tipo]);
        return result;
    },
    
    // Obtener todos los clientes
    obtenerTodos: async () => {
        const [results] = await connection.query('SELECT * FROM Cliente');
        return results;
    },

    // Actualizar un cliente
    actualizar: async (codCliente, data) => {
        const { Nombre, Apellido, DNI, Tipo } = data;
        const [result] = await connection.query('UPDATE Cliente SET Nombre = ?, Apellido = ?, DNI = ?, Tipo = ? WHERE codCliente = ?', [Nombre, Apellido, DNI, Tipo, codCliente]);
        return result;
    },

    // Eliminar un cliente
    eliminar: async (codCliente) => {
        const [result] = await connection.query('DELETE FROM Cliente WHERE codCliente = ?', [codCliente]);
        return result;
    }
};

module.exports = Cliente;
