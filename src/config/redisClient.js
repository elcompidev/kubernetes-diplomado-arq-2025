const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

redisClient.on('error', (err) => {
    console.error('❌ Error al conectar con Redis:', err);
});

redisClient.on('connect', () => {
    console.log('✅ Conexion establecida con Redis');
});

(async() => {
    try {
        await redisClient.connect();
    } catch (err) {
        console.error('❌ No se pudo conectar a Redis:', err);
    }
})();

module.exports = redisClient;