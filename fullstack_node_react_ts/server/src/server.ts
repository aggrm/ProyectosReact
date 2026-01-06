import express from "express"
import colors from "colors"
import cors, { CorsOptions } from "cors";
import morgan from 'morgan'
import swaggerUI from "swagger-ui-express"
import swaggerSepc, {swaggerUIOptions} from "./config/swagger";
import router from "./router"
import db from "./config/db"

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

//Permitir conexiones
const corsOptions : CorsOptions = {
    origin: function(origen, callback) {
        if(origen === process.env.FRONTEND_URL){
            callback(null, true)
        }else{
            callback(new Error('Error de CORS'), false)
        }
    }
}
server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))
server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSepc, swaggerUIOptions))

export default server