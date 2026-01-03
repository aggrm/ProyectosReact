import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"
import path from "path";

dotenv.config()


const db = new Sequelize(process.env.DB_URL!, {
    models: [path.join(__dirname, "../models")],
})

export default db

