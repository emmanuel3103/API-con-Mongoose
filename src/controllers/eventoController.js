const Evento = require('../models/evento');

// Crear un nuevo evento (Create)
exports.crearEvento = async (req, res) => {
  try {
    const nuevoEvento = new Evento(req.body);
    const eventoGuardado = await nuevoEvento.save();
    res.status(201).json({ message: 'Evento creado exitosamente', evento: eventoGuardado });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el evento', error: error.message });
  }
};

// Obtener todos los eventos (Read)
exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.find().populate('grupo').populate('participantes');
    res.status(200).json({ message: 'Eventos obtenidos exitosamente', eventos });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los eventos', error: error.message });
  }
};

// Obtener un evento por ID (Read)
exports.obtenerEventoPorId = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id).populate('grupo').populate('participantes');
    res.status(200).json({ message: 'Evento obtenido exitosamente', evento });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el evento', error: error.message });
  }
};

// Actualizar un evento (Update)
exports.actualizarEvento = async (req, res) => {
  try {
    const eventoActualizado = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Evento actualizado exitosamente', evento: eventoActualizado });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el evento', error: error.message });
  }
};

// Eliminar un evento (Delete)
exports.eliminarEvento = async (req, res) => {
  try {
    await Evento.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Evento eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el evento', error: error.message });
  }
};
