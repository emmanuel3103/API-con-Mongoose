const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.post('/crearEventos', eventoController.crearEvento);
router.get('/obtenerEventos', eventoController.obtenerEventos);
router.get('/obtenerEventosporId/:id', eventoController.obtenerEventoPorId);
router.put('/actualizarEventos/:id', eventoController.actualizarEvento);
router.delete('/eliminarEventos/:id', eventoController.eliminarEvento);

module.exports = router;
