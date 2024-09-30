const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');  // Rutas de autenticación
const encomiendaRoutes = require('./routes/encomiendaRoutes');  // Rutas de encomiendas
const clientRoutes = require('./routes/clientRoutes');
const officeRoutes = require('./routes/officeRoutes');

dotenv.config();

const app = express();

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Middleware para procesar solicitudes con datos codificados en URL
app.use(express.urlencoded({ extended: true }));

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de encomiendas
app.use('/api/encomiendas', encomiendaRoutes);  // Agrega esta línea
// Rutas de cliente
app.use('/api/clientes', clientRoutes);
// Rutas de Oficina 
app.use('/api/oficinas', officeRoutes);
// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
