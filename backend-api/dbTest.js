const pool = require('./config/db'); // Asegúrate de que apunte correctamente al archivo que maneja la conexión con MySQL

// Función para probar la conexión
const testConnection = async () => {
  try {
    // Hacemos una consulta simple a la base de datos
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    console.log('Conexión exitosa. Resultado de la consulta:', rows[0].solution);
  } catch (err) {
    console.error('Error al conectarse a la base de datos:', err);
  }
};

// Ejecutamos la función de prueba
testConnection();
