const datoslandings = require('../models/data.js');


// Obtiene nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)​
const getByQuery = async (req,res) => {

    if(req.query.minimum_mass){
        // const toNumber = async() => { 
        //     await datoslandings.updateMany(
        //          { 'mass' : { $type: 2 }},  
        //         [{ $set: { 'mass': { $toDouble: '$mass' } } }] 
        //         ) 
        // } 
        // toNumber()
        const massdata = parseInt(req.query.minimum_mass)
        const leer = await datoslandings.find({mass: {$gte:massdata}},'name mass -_id')
        res.status(200).json(leer);
    } else if(req.query.from && req.query.to){
        const timefrom = parseInt(req.query.from)
        const timeto = parseInt(req.query.to)
        const leer = await datoslandings.find({year: {$gte: timefrom, $lte: timeto}},'name mass year -_id')
        res.status(200).json(leer);
    }
     else if(req.query.from){
        const timefrom = parseInt(req.query.from)
        const leer = await datoslandings.find({year: {$gte: timefrom}},'name mass year -_id')
        res.status(200).json(leer);
    } else if(req.query.to){
        const timeto = parseInt(req.query.to)
        const leer = await datoslandings.find({year: {$lte: timeto}},'name mass year -_id')
        res.status(200).json(leer);
    } else {
        console.log("error al introducir parámetros")
    }
    
    
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
//funcion que permite guardar una landing nueva mediante post
const createLanding = async (req,res) => {
    
    const newLanding = new datoslandings(req.body); // {} nuevo producto a guardar
    try{
    const response = await newLanding.save();
   // .json({message:`Película ${response.title} guardada en el sistema con ID: ${response.id}`})
    res.status(201).send(`landing ${response.name} guardada correctamente`)
    } catch(err){
        res.status(400).json({message:err});
    }
  }

 //function que elimina una landing dependiendo del id que le pasemos por el body
 const editLanding = async (req,res) => {
    value=req.body.id
    const response = await datoslandings.findOneAndUpdate({id: value}, req.body)
    res.status(201).send(`landing con id: "${value}" editada correctamente`)
}



  //function que elimina una landing dependiendo del id que le pasemos por el body
  const deleteLanding = async (req,res) => {
      value=req.body.id
      const response = await datoslandings.deleteOne({id: value})
      res.status(201).send(`landing con id: "${value}" eliminada correctamente`)
}


const landings = {
    getByQuery,
    getNameandMass,
    getNameandClass,
    createLanding,
    editLanding,
    deleteLanding
}
module.exports = landings;