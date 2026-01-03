import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors"
import swaggerUI from "swagger-ui-express"
import swaggerSepc, {swaggerUIOptions} from "./config/swagger";

//conectar a base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        //console.log(colors.blue('Conexion realizada a la DB'))
    } catch (error) {
        //console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar a la BD'))
    }
}
connectDB()

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())
server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSepc, swaggerUIOptions))

export default server