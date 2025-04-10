const precargarVehiculos = require('./src/utils/dataLoader');
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    console.log(`📄 Documentación en http://localhost:${PORT}/api-docs`);
    await precargarVehiculos();
});