const express = require('express');
const { fetchCategories, createCategory } = require('../controller/Category');

const router = express.Router();
//  /categories is already added in base path
router
    /**
     *  @openapi
     * /categories:
     * get:
     * summary: Get all categories
     * description: Get all categories
     * responses:
     * 200:
     * description: Get all categories
     * 500:
     * description: Internal Server Error
     * */
    .get('/', fetchCategories)
    /**
     * @openapi
     * /categories:
     * post:
     * summary: Create category
     * description: Create category
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
     * required:
     * - name
     * responses:
     * 200:
     * description: Create category
     * 500:
     * description: Internal Server Error
     * */
    .post('/', createCategory)

exports.router = router;