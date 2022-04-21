const mongoose = require('mongoose');

const objectSchema = {
    name: { 
        type: String, 
        required: true,
        unique: true
    },
    id: { 
        type: String, 
        required: true,
        unique: true
    },
    nametype: { 
        type: String, 
        required: true 
    },
    recclass: { 
        type: String, 
        required: true 
    },
    mass: { 
        type: Number, 
        required: true 
    },
    fall: { 
        type: String, 
        required: true 
    },
    year: { 
        type: String, 
        required: true 
    },
    reclat: { 
        type: String, 
        required: true 
    },
    reclong: { 
        type: String, 
        required: true 
    },
    geolocation: [
        {latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        }}
    ]

};
// Crear el esquema
const landingSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Landings = mongoose.model('landings', landingSchema,'landings');

module.exports = Landings;
