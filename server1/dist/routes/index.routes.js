"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
var cors = require('cors');
const index_controller_1 = require("../controllers/index.controller");
router.route("/")
    .get(index_controller_1.indexInicio);
router.route("/conexion")
    .get(index_controller_1.getConnection);
router.route("/createReport")
    .post(index_controller_1.createReport);
router.route("/viewReport")
    .post(index_controller_1.viewReport);
router.route("/getReports")
    .get(index_controller_1.getReports);
exports.default = router;
