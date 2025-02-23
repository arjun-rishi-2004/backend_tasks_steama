
import { Pool } from "pg";


const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}

const pool = new Pool(config)

// export const getPoolConnection = async () => {
//     const client = await pool.connect()
//     const now = await client.query('SELECT NOW()')
//     console.log("Connected to the database now: ", now.rows[0].now)
//     client.release()
//     return pool;
// }
console.log("Database connection initialized");


export {pool} ; 