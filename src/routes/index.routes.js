const express = require("express");
const mailRoutes = require("./maill.routes");
const routes = express();

routes.use(mailRoutes);

module.exports = routes;
