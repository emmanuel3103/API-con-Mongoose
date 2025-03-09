const Grupo = require('../models/Grupo');

// Crear un nuevo grupo (Create)
exports.crearGrupo = async (req, res) => {
  try {
    const nuevoGrupo = new Grupo(req.body);
    const grupoGuardado = await nuevoGrupo.save();
    res.status(201).json({ message: 'Grupo creado exitosamente', grupo: grupoGuardado });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el grupo', error: error.message });
  }
};

// Obtener todos los grupos (Read)
exports.obtenerGrupos = async (req, res) => {
  try {
    const grupos = await Grupo.find().populate('usuarios').populate('eventos');
    res.status(200).json({ message: 'Grupos obtenidos exitosamente', grupos });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los grupos', error: error.message });
  }
};

// Obtener un grupo por ID (Read)
exports.obtenerGrupoPorId = async (req, res) => {
  try {
    const grupo = await Grupo.findById(req.params.id).populate('usuarios').populate('eventos');
    res.status(200).json({ message: 'Grupo obtenido exitosamente', grupo });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el grupo', error: error.message });
  }
};

// Actualizar un grupo (Update)
exports.actualizarGrupo = async (req, res) => {
  try {
    const grupoActualizado = await Grupo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Grupo actualizado exitosamente', grupo: grupoActualizado });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el grupo', error: error.message });
  }
};

// Eliminar un grupo (Delete)
exports.eliminarGrupo = async (req, res) => {
  try {
    await Grupo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Grupo eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el grupo', error: error.message });
  }
};
