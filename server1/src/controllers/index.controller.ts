import {Request,Response} from "express"
import {connect} from "../database";
import { Reporte } from "../interfaces/reporte";

const carnetServidor=process.env.CARNET;

export async function getConnection(req:Request, res:Response):Promise<Response>{
    const conn=await connect();
    const post = await conn.query('SELECT * FROM REPORTE;');
    return res.json(post[0]);

}
export function indexInicio(req:Request,res:Response):Response{
   return res.json("funcionaaa");
}

export async function createReport(req:Request,res:Response){
    const datos: Reporte = req.body;
    datos.procesado_por=carnetServidor;

    const conn= await connect();
    const post = await conn.query('INSERT INTO REPORTE SET ?', [datos]);
    res.json({"datos":post[0],"servidor":carnetServidor});res.status(200);
}

export async function viewReport(req:Request,res:Response){
    const datos = req.body.carnet;
    const conn= await connect();
    const data= await conn.query('select * from REPORTE WHERE carnet = ?', [datos]);
    res.json({"datos":data[0],"servidor":carnetServidor});res.status(200)
}

export async function getReports(req:Request,res:Response){
   
    const conn= await connect();
    const  data= await conn.query('select * from REPORTE');
    res.json({"datos":data[0],"servidor":carnetServidor});res.status(200);
    
}

 