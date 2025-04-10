const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehiclesController');

/**
 * @swagger
 * /vehiculos:
 *   get:
 *     summary: Obtener todos los vehículos
 *     tags: [Vehiculos]
 *     responses:
 *       200:
 *         description: Lista de vehículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehiculo'
 */
router.get('/', vehiclesController.obtenerTodosLosVehiculos);

/**
 * @swagger
 * /vehiculos/{id}:
 *   get:
 *     summary: Obtener un vehículo por ID
 *     tags: [Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del vehículo
 *     responses:
 *       200:
 *         description: Vehículo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehiculo'
 *       404:
 *         description: Vehículo no encontrado
 */
router.get('/:id', vehiclesController.obtenerVehiculo);

/**
 * @swagger
 * components:
 *   schemas:
 *     Vehiculo:
 *       type: object
 *       required:
 *         - tipo
 *         - marca
 *         - modelo
 *         - cilindraje
 *         - max_velocidad
 *         - color
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         tipo:
 *           type: string
 *           enum: [carro, moto]
 *           example: carro
 *         marca:
 *           type: string
 *           example: Toyota
 *         modelo:
 *           type: string
 *           example: Corolla 2021
 *         cilindraje:
 *           type: integer
 *           example: 1800
 *         max_velocidad:
 *           type: integer
 *           example: 220
 *         color:
 *           type: string
 *           example: gris
 */

/**
 * @swagger
 * /vehiculos:
 *   post:
 *     summary: Crear un nuevo vehículo
 *     tags: [Vehiculos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehiculo'
 *     responses:
 *       201:
 *         description: Vehículo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehiculo'
 */
router.post('/', vehiclesController.crearVehiculo);

/**
 * @swagger
 * /vehiculos/{id}:
 *   put:
 *     summary: Actualizar un vehículo existente
 *     tags: [Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del vehículo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehiculo'
 *     responses:
 *       200:
 *         description: Vehículo actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehiculo'
 */
router.put('/:id', vehiclesController.actualizarVehiculo);

/**
 * @swagger
 * /vehiculos/{id}:
 *   delete:
 *     summary: Eliminar un vehículo
 *     tags: [Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del vehículo
 *     responses:
 *       204:
 *         description: Eliminado exitosamente
 */
router.delete('/:id', vehiclesController.eliminarVehiculo);

module.exports = router;