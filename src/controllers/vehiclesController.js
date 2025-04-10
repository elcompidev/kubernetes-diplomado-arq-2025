const redisClient = require('../config/redisClient');
require('dotenv').config();

const TTL = parseInt(process.env.CACHE_TTL) || 3600;

const getVehiculoKey = (id) => `vehiculo:${id}`;

const crearVehiculo = async(req, res) => {
    const vehiculo = req.body;
    if (!vehiculo.id) {
        return res.status(400).json({ error: 'El campo id es obligatorio' });
    }

    try {
        const key = getVehiculoKey(vehiculo.id);
        const exists = await redisClient.exists(key);
        if (exists) {
            return res.status(409).json({ message: 'Ya existe un vehículo con ese ID' });
        }

        await redisClient.setEx(key, TTL, JSON.stringify(vehiculo));
        res.status(201).json({ message: 'Vehículo creado', vehiculo });
    } catch (err) {
        console.error('❌ Error al crear vehículo:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const obtenerVehiculo = async(req, res) => {
    const { id } = req.params;
    const key = getVehiculoKey(id);

    try {
        const data = await redisClient.get(key);
        if (!data) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.status(200).json(JSON.parse(data));
    } catch (err) {
        console.error('❌ Error al obtener vehículo:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const obtenerTodosLosVehiculos = async(req, res) => {
    try {
        const keys = await redisClient.keys('vehiculo:*');

        if (keys.length === 0) {
            return res.status(200).json({ vehiculos: [] });
        }

        const values = await redisClient.mGet(keys);
        const vehiculos = values.map(value => JSON.parse(value));

        res.status(200).json({ vehiculos });
    } catch (err) {
        console.error('❌ Error al obtener todos los vehículos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const actualizarVehiculo = async(req, res) => {
    const { id } = req.params;
    const vehiculoActualizado = req.body;
    const key = getVehiculoKey(id);

    try {
        const exists = await redisClient.exists(key);
        if (!exists) {
            return res.status(404).json({ message: 'Vehículo no encontrado para actualizar' });
        }

        await redisClient.setEx(key, TTL, JSON.stringify(vehiculoActualizado));
        res.status(200).json({ message: 'Vehículo actualizado', vehiculo: vehiculoActualizado });
    } catch (err) {
        console.error('❌ Error al actualizar vehículo:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const eliminarVehiculo = async(req, res) => {
    const { id } = req.params;
    const key = getVehiculoKey(id);

    try {
        const deleted = await redisClient.del(key);
        if (deleted === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.status(200).json({ message: 'Vehículo eliminado' });
    } catch (err) {
        console.error('❌ Error al eliminar vehículo:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    crearVehiculo,
    obtenerVehiculo,
    obtenerTodosLosVehiculos,
    actualizarVehiculo,
    eliminarVehiculo,
};