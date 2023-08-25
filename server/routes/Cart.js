const express = require('express');
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require('../controller/Cart');

const router = express.Router();
//  /products is already added in base path
router
    /**
     * @openapi
     * /cart:
     * post:
     * summary: Add to cart
     * description: Add to cart
     * requestBody:
     * required: true
     * content:
     * application/json:
     * schema:
     * type: object
     * properties:
     * productId:
     * type: string
     * description: Product Id
     * quantity:
     * type: number
     * description: Quantity
     * required:
     * - productId
     * - quantity
     * responses:
     * 200:
     * description: Add to cart
     * 500:
     * description: Internal Server Error
     * */
.post('/', addToCart)
    /**
     * @openapi
     *  /cart:
     * get:
     * summary: Get cart by user
     * description: Get cart by user
     * responses:
     * 200:
     * description: Get cart by user
     * 500:
     * description: Internal Server Error
     * */
    .get('/', fetchCartByUser)
    /**
     * @openapi
     * /cart/{id}:
     * delete:
     * summary: Delete from cart
     * description: Delete from cart
     * parameters:
     * - in: path
     * name: id
     * schema:
     * type: string
     * required: true
     * description: Cart Id
     * responses:
     * 200:
     * description: Delete from cart
     * 500:
     * description: Internal Server Error
     * */
    .delete('/:id', deleteFromCart)
    /**
     * @openapi
     * /cart/{id}:
     * patch:
     * summary: Update cart
     * description: Update cart
     * parameters:
     * - in: path
     * name: id
     * schema:
     * type: string
     * required: true
     * description: Cart Id
     * requestBody:
     * required: true
     * content:
     * application/json:
     * schema:
     * type: object
     * properties:
     * quantity:
     * type: number
     * description: Quantity
     * required:
     * - quantity
     * responses:
     * 200:
     * description: Update cart
     * 500:
     * description: Internal Server Error
     * */
    .patch('/:id', updateCart)


exports.router = router;