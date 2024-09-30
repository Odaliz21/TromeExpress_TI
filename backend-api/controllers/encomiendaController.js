const Encomienda = require('../models/encomiendaModel');  // Modelo de encomienda

// Crear una nueva encomienda
exports.createEncomienda = async (req, res) => {
  try {
    const encomienda = req.body;
    const result = await Encomienda.create(encomienda);
    res.status(201).json({ message: 'Encomienda creada exitosamente', id: result.insertId });
  } catch (error) {
    console.error('Error al crear encomienda:', error);
    res.status(500).json({ message: 'Error al crear encomienda', error });
  }
};

// Obtener todas las encomiendas
exports.getAllEncomiendas = async (req, res) => {
  try {
    const encomiendas = await Encomienda.getAll();
    res.status(200).json(encomiendas);
  } catch (error) {
    console.error('Error al obtener encomiendas:', error);
    res.status(500).json({ message: 'Error al obtener encomiendas', error });
  }
};

// Obtener una encomienda por su código
exports.getEncomiendaById = async (req, res) => {
  const { codEncomienda } = req.params;
  try {
    const encomienda = await Encomienda.getById(codEncomienda);
    if (!encomienda) {
      return res.status(404).json({ message: 'Encomienda no encontrada' });
    }
    res.status(200).json(encomienda);
  } catch (error) {
    console.error('Error al obtener encomienda:', error);
    res.status(500).json({ message: 'Error al obtener encomienda', error });
  }
};

// Actualizar una encomienda
exports.updateEncomienda = async (req, res) => {
  const { codEncomienda } = req.params;
  const encomiendaData = req.body;
  try {
    const result = await Encomienda.update(codEncomienda, encomiendaData);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Encomienda no encontrada' });
    }
    res.status(200).json({ message: 'Encomienda actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar encomienda:', error);
    res.status(500).json({ message: 'Error al actualizar encomienda', error });
  }
};

// Eliminar una encomienda
exports.deleteEncomienda = async (req, res) => {
  const { codEncomienda } = req.params;
  try {
    const result = await Encomienda.delete(codEncomienda);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Encomienda no encontrada' });
    }
    res.status(200).json({ message: 'Encomienda eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar encomienda:', error);
    res.status(500).json({ message: 'Error al eliminar encomienda', error });
  }
};
