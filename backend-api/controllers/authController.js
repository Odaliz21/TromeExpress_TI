const User = require('../models/userModel');  // Modelo de usuario que interactúa con la base de datos
const generateToken = require('../utils/generateToken');  // Para generar tokens JWT

// Función para registrar usuarios (sin encriptar la contraseña)
exports.register = async (req, res) => {
  // Depuración extendida
  console.log("Headers recibidos:", req.headers);  // Verificar encabezados
  console.log("Cuerpo recibido:", req.body);  // Verificar cuerpo de la solicitud

  const { codUsuario, username, password, role } = req.body;

  if (!password) {
    console.log("Contraseña no proporcionada o vacía");  // Agregar esto para depurar
    return res.status(400).json({ message: 'Contraseña no proporcionada' });
  }

  try {
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    await User.createUser({ codUsuario, username, password, role });

    res.status(201).json({ message: `Usuario ${role} creado exitosamente` });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
};


// Función para iniciar sesión (sin encriptación)
exports.login = async (req, res) => {
  const { username, password } = req.body;  // Datos de inicio de sesión

  try {
    // Verificar si el usuario existe en la base de datos
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Comparar la contraseña ingresada con la almacenada (sin encriptación)
    if (password !== user.Password) {
      return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Generar un token JWT para el usuario
    const token = generateToken(user.codUsuario, user.role);

    // Responder con el token
    res.json({ token, role: user.Rol });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};
