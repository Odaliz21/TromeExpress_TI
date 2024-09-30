const db = require('../config/db');  // Conexión a la base de datos

const Encomienda = {
  // Crear una nueva encomienda
  create: async (encomienda) => {
    const [result] = await db.query(
      'INSERT INTO Encomienda (codEncomienda, codClienteRemitente, codClienteDestinatario, codOficinaOrigen, codOficinaDestino, codUsuario, Destino, Peso, Tipo, Estado, FechaRecepcion, FechaEntrega) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        encomienda.codEncomienda,
        encomienda.codClienteRemitente,
        encomienda.codClienteDestinatario,
        encomienda.codOficinaOrigen,
        encomienda.codOficinaDestino,
        encomienda.codUsuario,
        encomienda.Destino,
        encomienda.Peso,
        encomienda.Tipo,
        encomienda.Estado,
        encomienda.FechaRecepcion,
        encomienda.FechaEntrega,
      ]
    );
    return result;
  },

  // Obtener todas las encomiendas
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Encomienda');
    return rows;
  },

  // Obtener una encomienda por su código
  getById: async (codEncomienda) => {
    const [rows] = await db.query('SELECT * FROM Encomienda WHERE codEncomienda = ?', [codEncomienda]);
    return rows[0];  // Retorna el primer resultado si lo encuentra
  },

  // Actualizar una encomienda
  update: async (codEncomienda, encomienda) => {
    const [result] = await db.query(
      'UPDATE Encomienda SET codClienteRemitente = ?, codClienteDestinatario = ?, codOficinaOrigen = ?, codOficinaDestino = ?, codUsuario = ?, Destino = ?, Peso = ?, Tipo = ?, Estado = ?, FechaRecepcion = ?, FechaEntrega = ? WHERE codEncomienda = ?',
      [
        encomienda.codClienteRemitente,
        encomienda.codClienteDestinatario,
        encomienda.codOficinaOrigen,
        encomienda.codOficinaDestino,
        encomienda.codUsuario,
        encomienda.Destino,
        encomienda.Peso,
        encomienda.Tipo,
        encomienda.Estado,
        encomienda.FechaRecepcion,
        encomienda.FechaEntrega,
        codEncomienda,
      ]
    );
    return result;
  },

  // Eliminar una encomienda
  delete: async (codEncomienda) => {
    const [result] = await db.query('DELETE FROM Encomienda WHERE codEncomienda = ?', [codEncomienda]);
    return result;
  }
};

module.exports = Encomienda;
