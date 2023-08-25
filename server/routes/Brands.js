const express = require('express');
const { fetchBrands, createBrand } = require('../controller/Brand');

const router = express.Router();
//  /brands is already added in base path
router
    /**
     * @openapi
     * /brands:
     * get:
     * summary: Get all brands
     * description: Get all brands
     * responses:
     * 200:
     * description: Get all brands
     * 500:
     * description: Internal Server Error
        */
    .get('/', fetchBrands)
    /**
     * @openapi
     * /brands:
     * post:
     * summary: Create brand
     * description: Create brand
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
     * description: Create brand
     * 500:
     * description: Internal Server Error
     * */
    .post('/', createBrand);

exports.router = router;