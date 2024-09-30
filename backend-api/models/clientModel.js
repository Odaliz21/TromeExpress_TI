const db = require('../config/db');  // Conexión a la base de datos

const Client = {
  // Crear un nuevo cliente
  createClient: async (client) => {
    const [result] = await db.query(
      'INSERT INTO Cliente (codCliente, Nombre, Apellido, DNI, Tipo) VALUES (?, ?, ?, ?, ?)',
      [client.codCliente, client.Nombre, client.Apellido, client.DNI, client.Tipo]
    );
    return result;
  },

  // Obtener todos los clientes
  getAllClients: async () => {
    const [rows] = await db.query('SELECT * FROM Cliente');
    return rows;
  },

  // Obtener cliente por ID
  getClientById: async (codCliente) => {
    const [rows] = await db.query('SELECT * FROM Cliente WHERE codCliente = ?', [codCliente]);
    return rows[0];
  },

  // Actualizar cliente
  updateClient: async (codCliente, client) => {
    await db.query(
      'UPDATE Cliente SET Nombre = ?, Apellido = ?, DNI = ?, Tipo = ? WHERE codCliente = ?',
      [client.Nombre, client.Apellido, client.DNI, client.Tipo, codCliente]
    );
  },

  // Eliminar cliente
  deleteClient: async (codCliente) => {
    await db.query('DELETE FROM Cliente WHERE codCliente = ?', [codCliente]);
  }
};

module.exports = Client;
