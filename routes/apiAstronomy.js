const express = require('express');
const router = express.Router();

const landings = require('../controllers/landings');
const hasApiKey = require('../middlewares/hasApiKey');

/***********SECCIÓN LANDINGS**********/

//router.get('/astronomy/landings',landings.getData);

router.get('/landings',landings.getMinimumMass);
router.get('/landings/mass/:id',landings.getNameandMass);
router.get('/landings/class/:id',landings.getNameandClass);
//router.get('/landings',landings.getNameandMass);

// POST --> Create Landing
router.post('/landings/mass/:id',landings.getNameandMass);



module.exports = router;