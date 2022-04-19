const express = require('express');
const router = express.Router();

const neas = require('../controllers/neas');
const hasApiKey = require('../middlewares/hasApiKey');

/***********SECCIÓN LANDINGS**********/

//router.get('/astronomy/landings',landings.getData);

router.get('/',neas.getByQuery);

//router.get('/landings',landings.getNameandMass);

//POST --> Create Neas
router.post('/create',neas.createNeas);

//PUT --> Edit Neas
router.put('/edit',neas.editNeas);

//DELETE --> Delete Neas
router.delete('/delete',neas.deleteNeas);

module.exports = router;