const datoslandings = require('../models/data.js');


// Obtiene nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)​
const getMinimumMass = async (req,res) => {
    const massdata = parseInt(req.query.mass)
    const leer = await datoslandings.find({mass: {$gte:massdata}},'name mass -_id')
    res.status(200).json(leer);
    
}

//Obtiene nombre y masa de aquellos meteoritos cuya masa sea la especificada (route params)
const getNameandMass = async (req,res) => {
    let massid = req.params.id
    const leer = await datoslandings.find({mass: {$eq:massid}},'name mass -_id')
    res.status(200).json(leer);
    
}

//Obtiene nombre y clase de aquellos meteoritos cuya clase sea la registrada (route params)​
const getNameandClass = async (req,res) => {
    let classid = req.params.id
    const leer = await datoslandings.find({recclass: {$eq:classid}},'name recclass -_id')
    res.status(200).json(leer);
    
}

const landings = {
    getMinimumMass,
    getNameandMass,
    getNameandClass
}
module.exports = landings;