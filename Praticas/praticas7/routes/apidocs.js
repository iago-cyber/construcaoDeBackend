const express = require('express');
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const Router = express.Router();
const File = fs.readFileSync('./swagger.yaml', 'utf-8');
const SwaggerDocument = YAML.parse(File);

Router.use('/', swaggerUI.serve);
Router.get('/', swaggerUI.setup(SwaggerDocument));

module.exports = Router;