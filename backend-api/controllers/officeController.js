const Office = require('../models/officeModel');  // Modelo de oficina

// Crear una nueva oficina
exports.createOffice = async (req, res) => {
  const { codOficina, NombreOficina, Direccion, Ciudad, Telefono } = req.body;
  try {
    await Office.createOffice({ codOficina, NombreOficina, Direccion, Ciudad, Telefono });
    res.status(201).json({ message: 'Oficina creada exitosamente' });
  } catch (error) {
    console.error('Error al crear oficina:', error);
    res.status(500).json({ message: 'Error al crear oficina' });
  }
};

// Obtener todas las oficinas
exports.getAllOffices = async (req, res) => {
  try {
    const offices = await Office.getAllOffices();
    res.json(offices);
  } catch (error) {
    console.error('Error al obtener oficinas:', error);
    res.status(500).json({ message: 'Error al obtener oficinas' });
  }
};

// Obtener oficina por ID
exports.getOfficeById = async (req, res) => {
  const { codOficina } = req.params;
  try {
    const office = await Office.getOfficeById(codOficina);
    if (!office) {
      return res.status(404).json({ message: 'Oficina no encontrada' });
    }
    res.json(office);
  } catch (error) {
    console.error('Error al obtener oficina:', error);
    res.status(500).json({ message: 'Error al obtener oficina' });
  }
};

// Actualizar oficina
exports.updateOffice = async (req, res) => {
  const { codOficina } = req.params;
  const { NombreOficina, Direccion, Ciudad, Telefono } = req.body;
  try {
    await Office.updateOffice(codOficina, { NombreOficina, Direccion, Ciudad, Telefono });
    res.json({ message: 'Oficina actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar oficina:', error);
    res.status(500).json({ message: 'Error al actualizar oficina' });
  }
};

// Eliminar oficina
exports.deleteOffice = async (req, res) => {
  const { codOficina } = req.params;
  try {
    await Office.deleteOffice(codOficina);
    res.json({ message: 'Oficina eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar oficina:', error);
    res.status(500).json({ message: 'Error al eliminar oficina' });
  }
};
