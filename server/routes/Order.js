const express = require('express');
const { createOrder, fetchOrdersByUser, deleteOrder, updateOrder, fetchAllOrders } = require('../controller/Order');

const router = express.Router();
//  /orders is already added in base path
router
    /**
     * @openapi
     * /orders:
     * get:
     * summary: Get all orders
     * description: Get all orders
     * responses:
     * 200:
     * description: Get all orders
     * 500:
     * description: Internal Server Error
     */
    .post('/', createOrder)
    /**
     * @openapi
     * /orders/own:
     * get:
     * summary: Get orders by user
     * description: Get orders by user
     * responses:
     * 200:
     * description: Get orders by user
     * 500:
     * description: Internal Server Error
     * */
    .get('/own/', fetchOrdersByUser)
    /**
     * @openapi
     * /orders/{id}:
     *  delete:
     * summary: Delete order
     * description: Delete order
     * parameters:
     * - in: path
     * name: id
     * schema:
     * type: string
     * required: true
     * responses:
     * 200:
     * description: Delete order
     * 500:
     * description: Internal Server Error
     * */
    .delete('/:id', deleteOrder)
    /**
     * @openapi
     * /orders/{id}:
     * patch:
     * summary: Update order
     * description: Update order
     * parameters:
     * - in: path
     * name: id
     * schema:
     * type: string
     * required: true
     * requestBody:
     * required: true
     * content:
     * application/json:
     * schema:
     * type: object
     * properties:
     * status:
     * type: string
     * description: Status
     * required:
     * - status
     * responses:
     * 200:
     * description: Update order
     * 500:
     * description: Internal Server Error
     * */
    .patch('/:id', updateOrder)
    /**
     * @openapi
     * /orders:
     * get:
     * summary: Get all orders
     * description: Get all orders
     * responses:
     * 200:
     * description: Get all orders
     * 500:
     * description: Internal Server Error
     * */
    .get('/', fetchAllOrders)


exports.router = router;