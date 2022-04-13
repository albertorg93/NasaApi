const express = require('express');
const router = express.Router();

const landings = require('../controllers/landings');
const hasApiKey = require('../middlewares/hasApiKey');

/***********SECCIÓN LANDINGS**********/

//router.get('/astronomy/landings',landings.getData);

router.get('/astronomy/landings',landings.getMinimumMass);
router.get('/astronomy/landings/mass/:id',landings.getNameandMass);
// POST --> Create Entry
// POST http://localhost:3000/api/entries --> endpoint para mandar objeto entry nueva
//router.post('/entries',hasApiKey,landings.createEntry);


module.exports = router;