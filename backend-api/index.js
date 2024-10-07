const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');  // Para registrar las solicitudes HTTP
const cors = require('cors');  // Para permitir solicitudes CORS

// Importar las rutas
const authRoutes = require('./routes/usuarioRoutes');  // Rutas de autenticación
const encomiendaRoutes = require('./routes/encomiendaRoutes');  // Rutas de encomiendas
const clientRoutes = require('./routes/clienteRoutes');  // Rutas de clientes
const officeRoutes = require('./routes/almacenRoutes');  // Rutas de oficinas
const estadoEncomiendaRoutes = require('./routes/estadoEncomiendaRoutes');  // Rutas de estados de encomiendas
const controlEncomiendaRoutes = require('./routes/controlEncomiendaRoutes');  // Rutas de control de encomiendas
const rutaRoutes = require('./routes/rutaRoutes');  // Rutas de rutas
const stockAlmacenRoutes = require('./routes/stockAlmacenRoutes');  // Rutas de stock de almacenes
const historialEncomiendaRoutes = require('./routes/historialEncomiendaRoutes');  // Rutas de historial de encomiendas
const rolRoutes = require('./routes/rolRoutes');  // Rutas de roles

dotenv.config();  // Cargar variables de entorno desde el archivo .env

const app = express();

// Middleware para registrar todas las solicitudes HTTP
app.use(morgan('combined'));  // 'combined' registra detalles completos de cada solicitud

// Middleware para permitir solicitudes CORS desde cualquier origen
app.use(cors());  // Permitir todas las solicitudes CORS

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Middleware para procesar solicitudes con datos codificados en URL
app.use(express.urlencoded({ extended: true }));

// Logging adicional para verificar las solicitudes que llegan al servidor
app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

// Ruta de prueba para verificar que el servidor esté corriendo
app.get('/test', (req, res) => {
  res.json({ mensaje: 'El servidor está funcionando correctamente' });
});

// Rutas
app.use('/api/auth', authRoutes);  // Rutas de autenticación
app.use('/api/encomiendas', encomiendaRoutes);  // Rutas de encomiendas
app.use('/api/clientes', clientRoutes);  // Rutas de clientes
app.use('/api/oficinas', officeRoutes);  // Rutas de oficinas
app.use('/api/estado-encomiendas', estadoEncomiendaRoutes);  // Rutas de estados de encomiendas
app.use('/api/control-encomiendas', controlEncomiendaRoutes);  // Rutas de control de encomiendas
app.use('/api/rutas', rutaRoutes);  // Rutas de rutas
app.use('/api/stock-almacen', stockAlmacenRoutes);  // Rutas de stock de almacenes
app.use('/api/historial-encomiendas', historialEncomiendaRoutes);  // Rutas de historial de encomiendas
app.use('/api/roles', rolRoutes);  // Rutas de roles

// Manejo de errores 404 para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Recurso no encontrado' });
});

// Puerto de escucha
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
