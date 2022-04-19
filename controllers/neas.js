const datosNeas = require('../models/neas.js');


// Obtiene nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)​
const getByQuery = async (req,res) => {

    if(req.query.class){
        const classdata = req.query.class
        console.log(classdata)
        const leer = await datosNeas.find({orbit_class: {$eq: classdata}}, 'designation period_yr orbit_class -_id')  //{orbit_class: {$gte:classdata}},'name mass -_id'
        res.status(200).json(leer);

    } else if(req.query.from && req.query.to){
        const timefrom = parseInt(req.query.from)
        const timeto = parseInt(req.query.to)
        const leer = await datosNeas.find({})   //orbit_class: {$eq: classdata
        //const leer = await datosNeas.find({discovery_date: {$gte: timefrom, $lte: timeto}},'designation discovery_date period_yr -_id')
        res.status(200).json(leer);

    }
     else if(req.query.from){
        const timefrom = parseInt(req.query.from)
        const leer = await datosNeas.find({discovery_date: {$gte: timefrom}},'designation discovery_date period_yr -_id')
        res.status(200).json(leer);

    } else if(req.query.to){
        const timeto = parseInt(req.query.to)
        const leer = await datosNeas.find({discovery_date: {$lte: timeto}},'designation discovery_date period_yr -_id')
        res.status(200).json(leer);

    } else {
        console.log("error al introducir parámetros")
    }
    
}

//funcion que permite guardar una landing nueva mediante post
const createNeas = async (req,res) => {
    
    const newNeas = new datosNeas(req.body); // {} nuevo producto a guardar
    try{
    const response = await newNeas.save();
   // .json({message:`Película ${response.title} guardada en el sistema con ID: ${response.id}`})
    res.status(201).send(`Neas ${response.orbit_class} guardada correctamente`)
    } catch(err){
        res.status(400).json({message:err});
    }
  }

   //function que elimina un neas dependiendo de la designation que le pasemos por el body
    const editNeas = async (req,res) => {
    value=req.body.designation
    console.log(value)
    const response = await datosNeas.findOneAndUpdate({designation: value}, req.body)
    res.status(201).send(`Neas con designation: "${value}" editada correctamente`)
}


   //function que elimina un neas dependiendo de la designation que le pasemos por el body
   const deleteNeas = async (req,res) => {
    value=req.body.designation
    console.log(value)
    const response = await datosNeas.deleteOne({designation: value})
    res.status(201).send(`Neas con designation: "${value}" eliminada correctamente`)
}



const landings = {
    getByQuery,
     createNeas,
     editNeas,
     deleteNeas
}
module.exports = landings;