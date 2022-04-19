const express = require('express');
const router = express.Router();

const landings = require('../controllers/landings');
const hasApiKey = require('../middlewares/hasApiKey');

/***********SECCIÓN LANDINGS**********/

//router.get('/astronomy/landings',landings.getData);

router.get('/',landings.getByQuery);
router.get('/mass/:id',landings.getNameandMass);
router.get('/class/:id',landings.getNameandClass);

//router.get('/landings',landings.getNameandMass);

// POST --> Create Landing
router.post('/create',landings.createLanding);

// PUT --> Edit Landing
router.put('/edit',landings.editLanding);

// DELETE --> Delete Landing
router.delete('/delete',landings.deleteLanding);

module.exports = router;