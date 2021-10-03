import{Router} from 'express'
const router=Router();
var cors = require('cors')
 
import  {indexInicio,createReport,viewReport,getReports, getConnection} from "../controllers/index.controller"
    router.route("/")
    .get(indexInicio)
    router.route("/conexion")
    .get(getConnection)
    router.route("/createReport")
    .post(createReport)
    router.route("/viewReport")
    .post(viewReport)
    router.route("/getReports")
    .get(getReports)

    export default router;