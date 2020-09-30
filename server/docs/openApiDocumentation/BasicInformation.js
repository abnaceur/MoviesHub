const swaggerDocument = {
  "swagger": "2.0",
  "info": {
      "title": "Hypertube RESTful API documentation",
      "description": "HYPERTUBE is a plateform for video streaming..",
      "version": "1.0.0"
  },
  "produces": ["application/json"],
  "paths": {
      "/users": {
          "post": {
              "x-swagger-router-controller": "home",
              "operationId": "index",
              "tags": ["Users"],
              "description": "[Login 123](https://www.google.com)",
              "parameters": [{
                  "name": "content",
                  "in": "formData",
                  "type": "array",
                  "collectionFormat": "multi",
                  "items": {
                      "type": "integer"
                  }
              },
              { "name": "profileId", "in": "formData", "required": true, "type": "string" },
              { "name": "file", "in": "formData", "type": "file", "required": "true" }],
              "responses": {}
          }
      },
      "/users/:id": {
          "get": {
              "x-swagger-router-controller": "bar",
              "operationId": "impossible",
              "tags": ["Users"],
              "description": "",
              "parameters": [],
              "responses": {
                "test": "hello"
              }
          }
      }
  }
};

module.exports = swaggerDocument;