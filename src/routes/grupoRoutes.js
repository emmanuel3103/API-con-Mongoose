const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/grupoController');

router.post('/crearGrupos', grupoController.crearGrupo);
router.get('/obtenerGrupos', grupoController.obtenerGrupos);
router.get('/obtenerGruposporId/:id', grupoController.obtenerGrupoPorId);
router.put('/actualizarGrupos/:id', grupoController.actualizarGrupo);
router.delete('/eliminarGrupos/:id', grupoController.eliminarGrupo);

module.exports = router;
