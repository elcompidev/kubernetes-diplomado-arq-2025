const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Vehiculos',
            version: '1.0.0',
            description: 'Documentación de la API de vehiculos usando REST API',
        },
        servers: [{
            url: 'http://localhost:3000/api/v1',
        }, ],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };