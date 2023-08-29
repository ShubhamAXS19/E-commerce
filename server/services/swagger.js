const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce API with Swagger",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                }
            }
        },
        security: [{
            bearerAuth: []
        }],

    },
    apis: ["./server/routes/*.js", "./server/model/*.js"]

};

const SwaggerSpecs = swaggerJSDoc(options);

exports.swaggerDocs = function (app, port) {
    // Swagger
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(SwaggerSpecs));
    // Docs in JSON format
    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(SwaggerSpecs);
    });
    console.log(`Swagger docs available at http://localhost:${port}/docs`);
}


