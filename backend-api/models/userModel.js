const db = require('../config/db');  // Conexión a la base de datos

const User = {
  // Buscar usuario por nombre de usuario
  findByUsername: async (username) => {
    const [rows] = await db.query('SELECT * FROM Usuario WHERE Usuario = ?', [username]);
    return rows[0];  // Retorna el primer resultado si lo encuentra
  },

  // Crear un nuevo usuario en la base de datos
  createUser: async (user) => {
    const [result] = await db.query(
      'INSERT INTO Usuario (codUsuario, Usuario, Password) VALUES (?, ?, ?)',
      [user.codUsuario, user.username, user.password]
    );
    await db.query('INSERT INTO RolesUsuarios (codUsuario, Rol) VALUES (?, ?)', [user.codUsuario, user.role]);
    return user;
  }
};

module.exports = User;
