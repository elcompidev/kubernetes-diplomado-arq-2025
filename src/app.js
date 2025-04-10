const express = require('express');
const rateLimit = require('express-rate-limit');
const carsRoutes = require('./routes/vehicles');
const { swaggerUi, swaggerDocs } = require('./docs/swagger');

const app = express();

app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: { error: 'Demasiadas solicitudes, inténtelo más tarde' },
});

app.use(limiter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1/vehiculos', carsRoutes);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;