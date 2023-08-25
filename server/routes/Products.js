const express = require('express');
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product');
const { Product } = require('../model/Product');

const router = express.Router();
//  /products is already added in base path
router
    /**
     * @openapi
     * /products:
     * get:
     * summary: Get all products
     * description: Get all products
     * responses:
     * 200:
     * description: Get all products
     * 500:
     * description: Internal Server Error
     */
    .post('/', createProduct)
    /**
     * @openapi
     * /products:
     * get:
     * summary: Get all products
     * description: Get all products
     * responses:
     * 200:
     * description: Get all products
     * 500:
     * description: Internal Server Error
     * */
    .get('/', fetchAllProducts)
    /**
     * @openapi
     * /products/{id}:
     * get:
     * summary: Get product by id
     * description: Get product by id
     * parameters:
     * - in: path
     * name: id
     * schema:
     * type: string
     * required: true
     * responses:
     * 200:
     * description: Get product by id
     * 500:
     * description: Internal Server Error
     * */
    .get('/:id', fetchProductById)
    /**
     * @openapi
     * /products/{id}:
     * patch:
     * summary: Update product
     * description: Update product
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
     *  type: object
     * properties:
     * name:
     * type: string
     * description: Name
     * description:
     * type: string
     * description: Description
     * price:
     * type: number
     * description: Price
     * brand:
     * type: string
     * description: Brand
     * category:
     * type: string
     * description: Category
     * countInStock:
     * type: number
     * description: Count in stock
     * required:
     * - name
     * - description
     *  
     * responses:
     *  200:
     * description: Update product
     *  500:
     * description: Internal Server Error
     * */
    .patch('/:id', updateProduct)

exports.router = router;