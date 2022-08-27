
const router = require('express').Router();
const controller =  require('../controllers/estudiantesController');

router.get('/', controller.getEstudiantes);
router.get('/:id', controller.getEstudiante);
router.post('/add', controller.createEstudiante);
router.put('/update/:id', controller.updateEstudiante);

module.exports = router