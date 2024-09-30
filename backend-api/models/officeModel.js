const db = require('../config/db');  // Conexión a la base de datos

const Office = {
  // Crear una nueva oficina
  createOffice: async (office) => {
    const [result] = await db.query(
      'INSERT INTO Oficina (codOficina, NombreOficina, Direccion, Ciudad, Telefono) VALUES (?, ?, ?, ?, ?)',
      [office.codOficina, office.NombreOficina, office.Direccion, office.Ciudad, office.Telefono]
    );
    return result;
  },

  // Obtener todas las oficinas
  getAllOffices: async () => {
    const [rows] = await db.query('SELECT * FROM Oficina');
    return rows;
  },

  // Obtener oficina por ID
  getOfficeById: async (codOficina) => {
    const [rows] = await db.query('SELECT * FROM Oficina WHERE codOficina = ?', [codOficina]);
    return rows[0];
  },

  // Actualizar oficina
  updateOffice: async (codOficina, office) => {
    await db.query(
      'UPDATE Oficina SET NombreOficina = ?, Direccion = ?, Ciudad = ?, Telefono = ? WHERE codOficina = ?',
      [office.NombreOficina, office.Direccion, office.Ciudad, office.Telefono, codOficina]
    );
  },

  // Eliminar oficina
  deleteOffice: async (codOficina) => {
    await db.query('DELETE FROM Oficina WHERE codOficina = ?', [codOficina]);
  }
};

module.exports = Office;
