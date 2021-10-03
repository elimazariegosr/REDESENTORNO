import { createPool, Pool } from 'mysql2/promise'


export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.HOST_DB,
        user: 'root',
        password:"1234",
        database: 'db_redes',
        connectionLimit: 10
    });
    return connection;
}