const db = require('../models/entry.js');
const datoslandings = require('../models/data.js');


const getMinimumMass = async (req,res) => {
    let massdata = req.query.minimum_mass
    const leer = await datoslandings.find({mass: {$gte:massdata}},'name mass -_id')
    res.status(200).json(leer);
    
}


const getNameandMass = async (req,res) => {
    let massid = req.params.id
    const leer = await datoslandings.find({mass: {$gte:massid}},'name mass -_id')
    res.status(200).json(leer);
    
}

const landings = {
    getMinimumMass,
    getNameandMass
}
module.exports = landings;