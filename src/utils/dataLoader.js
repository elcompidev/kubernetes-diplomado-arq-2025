const redisClient = require('../config/redisClient');
const TTL = parseInt(process.env.CACHE_TTL) || 3600;

const precargarVehiculos = async() => {
    const vehiculos = [{
            id: 1,
            tipo: "carro",
            marca: "Toyota",
            modelo: "Corolla 2021",
            cilindraje: 1800,
            max_velocidad: 220,
            color: "gris"
        },
        {
            id: 2,
            tipo: "moto",
            marca: "Yamaha",
            modelo: "MT-07",
            cilindraje: 689,
            max_velocidad: 200,
            color: "negro"
        },
        {
            id: 3,
            tipo: "carro",
            marca: "Chevrolet",
            modelo: "Camaro 2021",
            cilindraje: 1800,
            max_velocidad: 220,
            color: "rojo"
        },
        {
            id: 4,
            tipo: "carro",
            marca: "Renault",
            modelo: "Logan",
            cilindraje: 1800,
            max_velocidad: 220,
            color: "gris"
        },

    ];

    for (const vehiculo of vehiculos) {
        const key = `vehiculo:${vehiculo.id}`;
        const exists = await redisClient.exists(key);
        if (!exists) {
            await redisClient.setEx(key, TTL, JSON.stringify(vehiculo));
            console.log(`✅ Precargado: ${key}`);
        }
    }
};

module.exports = precargarVehiculos;
