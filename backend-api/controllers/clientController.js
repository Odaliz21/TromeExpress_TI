const Client = require('../models/clientModel');  // Modelo de cliente

// Crear un nuevo cliente
exports.createClient = async (req, res) => {
  const { codCliente, Nombre, Apellido, DNI, Tipo } = req.body;
  try {
    await Client.createClient({ codCliente, Nombre, Apellido, DNI, Tipo });
    res.status(201).json({ message: 'Cliente creado exitosamente' });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ message: 'Error al crear cliente' });
  }
};

// Obtener todos los clientes
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.getAllClients();
    res.json(clients);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ message: 'Error al obtener clientes' });
  }
};

// Obtener cliente por ID
exports.getClientById = async (req, res) => {
  const { codCliente } = req.params;
  try {
    const client = await Client.getClientById(codCliente);
    if (!client) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(client);
  } catch (error) {
    console.error('Error al obtener cliente:', error);
    res.status(500).json({ message: 'Error al obtener cliente' });
  }
};

// Actualizar cliente
exports.updateClient = async (req, res) => {
  const { codCliente } = req.params;
  const { Nombre, Apellido, DNI, Tipo } = req.body;
  try {
    await Client.updateClient(codCliente, { Nombre, Apellido, DNI, Tipo });
    res.json({ message: 'Cliente actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    res.status(500).json({ message: 'Error al actualizar cliente' });
  }
};

// Eliminar cliente
exports.deleteClient = async (req, res) => {
  const { codCliente } = req.params;
  try {
    await Client.deleteClient(codCliente);
    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    res.status(500).json({ message: 'Error al eliminar cliente' });
  }
};
