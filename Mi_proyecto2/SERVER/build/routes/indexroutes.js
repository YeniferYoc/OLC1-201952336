"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_control_1 = require("../controladores/index_control");
class indexroutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/',(req, res) => res.send('hellxx  o'));
        this.router.get("/analizar", index_control_1.apiController.funcion1);
        this.router.post("/leer", index_control_1.apiController.leer_entrada);
        this.router.get("/:nombre", index_control_1.apiController.funcion3);
        this.router.get("/saludo/:nombre", index_control_1.apiController.funcion4);
    }
}
const ndexroutes = new indexroutes();
exports.default = ndexroutes.router;
