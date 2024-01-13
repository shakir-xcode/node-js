const router = require('express').Router();
const genraContoller = require('../controllers/genras');

router.get('/', genraContoller.getAllGenra);
router.post('/', genraContoller.addGenra);
router.put('/:id', genraContoller.deleteGenra);


module.exports = router;