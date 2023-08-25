const express = require('express');
const { createUser, loginUser, checkAuth, resetPasswordRequest, resetPassword, logout } = require('../controller/Auth');
const passport = require('passport');

const router = express.Router();
//  /auth is already added in base path
router
    /**
     *  @openapi
     * /auth/signup:
     * post:
     * summary: Signup
     * description: Signup
     * requestBody:
     *  required: true
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
     * password:
     * type: string
     * description: Password
     * required:
     * - name
     * - email
     * - password
     * responses:
     * 200:
     * description: Signup
     * 500:
     * description: Internal Server Error
     */
    .post('/signup', createUser)
    /**
     * @openapi
     * /auth/login:
     *  post:
     *     summary: Login
     *    description: Login
     *   requestBody:
     *     required: true
     *    content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         email:
     *         type: string
     *        description: Email
     *      password:
     *      type: string
     *     description: Password
     *   required:
     *   - email
     *  - password
     * responses:
     * 200:
     * description: Login
     * 401:
     * description: Unauthorized
     * 500:
     * description: Internal Server Error
     * 
     */
    .post('/login', passport.authenticate('local'), loginUser)
    /**
     * @openapi
     * /auth/check:
     * get:
     * summary: Check Auth
     * description: Check Auth
     * security:
     * - bearerAuth: []
     * responses:
     * 200:
     * description: Check Auth
     * 401:
     * description: Unauthorized
     *  500:
     * description: Internal Server Error
     */
    .get('/check', passport.authenticate('jwt'), checkAuth)
    /**
     * @openapi
     * /auth/logout:
     * get:
     * summary: Logout
     * description: Logout
     * security:
     * - bearerAuth: []
     * responses:
     * 200:
     * description: Logout
     * 401:
     * description: Unauthorized
     * 500:
     * description: Internal Server Error
     */
    .get('/logout', logout)
    /**
     * @openapi
     * /auth/reset-password-request:
     * post:
     * summary: Reset Password Request
     * description: Reset Password Request
     * requestBody:
     * required: true
     * content:
     * application/json:
     * schema:
     * type: object
     * properties:
     * email:
     * type: string
     * description: Email
     * required:
     * - email
     * responses:
     * 200:
     * description: Reset Password Request
     * 500:
     * description: Internal Server Error
     */
    .post('/reset-password-request', resetPasswordRequest)
    /**
     * @openapi
     * /auth/reset-password:
     * post:
     * summary: Reset Password
     *  description: Reset Password
     * requestBody:
     * required: true
     * content:
     * application/json:
     * schema:
     * type: object
     * properties:
     * password:
     * type: string
     * description: Password
     * required:
     * - password
     * responses:
     * 200:
     * description: Reset Password
     * 500:
     * description: Internal Server Error
     */
    .post('/reset-password', resetPassword)

exports.router = router;