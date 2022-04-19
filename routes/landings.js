const express = require('express');
const router = express.Router();

const landings = require('../controllers/landings');
const hasApiKey = require('../middlewares/hasApiKey');

/***********SECCIÓN LANDINGS**********/

//router.get('/astronomy/landings',landings.getData);

router.get('/landings',landings.getByQuery);
router.get('/landings/mass/:id',landings.getNameandMass);
router.get('/landings/class/:id',landings.getNameandClass);

//router.get('/landings',landings.getNameandMass);

// POST --> Create Landing
router.post('/landings/create',landings.createLanding);


// DELETE --> Delete Landing
router.delete('/landings/delete',landings.deleteLanding);

module.exports = router;