const router = require('express').Router();
const usuarioController = require('../controllers/usuariosController');

router.get('/', usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuario);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;