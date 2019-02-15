const express = require("express");

const TreinoController = require("./controllers/TreinoController");

const routes = express.Router();

routes.get("/treinos", TreinoController.index);
routes.post("/treinos", TreinoController.store);

module.exports = routes;