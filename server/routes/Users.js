const express = require('express');
const { fetchUserById, updateUser } = require('../controller/User');

const router = express.Router();
//  /users is already added in base path
router
    /**
     * @openapi
     * /users/own:
     * get:
     * summary: Get user by id
     * description: Get user by id
     * responses:
     * 200:
     * description: Get user by id
     * 500:
     * description: Internal Server Error
     */
    .get('/own', fetchUserById)
    /**
     * @openapi
     * /users/{id}:
     * patch:
     * summary: Update user
     * description: Update user
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
     * name:
     * type: string
     * description: Name
     * email:
     * type: string
     * description: Email
     * required:
     * - name
     * - email
     * responses:
     * 200:
     * description: Update user
     * 500:
     * description: Internal Server Error
     * */
    .patch('/:id', updateUser)

exports.router = router;