import { Pool } from "pg"

export async function connect() { // Singleton
    if (global.connection) {
        return global.connection.connect()

    }



    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING,
    });

    const client = await pool.connect()
    console.log("Criou o Pool de Conexão")

    const res = await client.query("SELECT now()")
    console.log(res.rows[0])
    client.release() //Libera a conexão

    global.connection = pool //Guarda numa área global da aplicação
    return pool.connect()
}

connect()