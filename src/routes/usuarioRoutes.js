const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/crearUsuarios', usuarioController.crearUsuario);
router.get('/obtenerUsuarios', usuarioController.obtenerUsuarios);
router.get('/usuariosporId/:id', usuarioController.obtenerUsuarioPorId);
router.put('/actualizarUsuarios/:id', usuarioController.actualizarUsuario);
router.delete('/eliminarUsuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;
