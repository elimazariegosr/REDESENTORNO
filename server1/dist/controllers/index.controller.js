"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReports = exports.viewReport = exports.createReport = exports.indexInicio = exports.getConnection = void 0;
const database_1 = require("../database");
const carnetServidor = process.env.CARNET;
function getConnection(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const post = yield conn.query('SELECT * FROM REPORTE;');
        return res.json(post[0]);
    });
}
exports.getConnection = getConnection;
function indexInicio(req, res) {
    return res.json("funcionaaa");
}
exports.indexInicio = indexInicio;
function createReport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const datos = req.body;
        datos.procesado_por = carnetServidor;
        const conn = yield database_1.connect();
        const post = yield conn.query('INSERT INTO REPORTE SET ?', [datos]);
        res.json({ "datos": post[0], "servidor": carnetServidor });
        res.status(200);
    });
}
exports.createReport = createReport;
function viewReport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const datos = req.body.carnet;
        const conn = yield database_1.connect();
        const data = yield conn.query('select * from REPORTE WHERE carnet = ?', [datos]);
        res.json({ "datos": data[0], "servidor": carnetServidor });
        res.status(200);
    });
}
exports.viewReport = viewReport;
function getReports(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const data = yield conn.query('select * from REPORTE');
        res.json({ "datos": data[0], "servidor": carnetServidor });
        res.status(200);
    });
}
exports.getReports = getReports;
