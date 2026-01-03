import { Request, Response } from "express"
import Product from "../models/Product.model"
import colors from "colors"

export const getProducts = async (req: Request,res: Response) => {
    try {
        const product = await Product.findAll({
            order: [
                ["id", "ASC"]
            ],
            attributes: { 
                exclude: ['createdAt', 'updatedAt', 'availability']
            }
        })
        res.json({data: product})
    } catch (error) {
        console.log(colors.red.bold(error))
    }
}

export const getProductById = async (req: Request,res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id, {
            attributes: { 
                exclude: ['createdAt', 'updatedAt', 'availability']
            }
        })

        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        res.json({data: product})
    } catch (error) {
        console.log(colors.red.bold(error))
    }
}

export const createProduct = async (req: Request,res: Response) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({data: product})
    } catch (error) {
        console.log(colors.red.bold(error))
    }
} 


export const updateProductById = async (req: Request,res: Response) => {
    try {

        const { id } = req.params
        const product = await Product.findByPk(id)

        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        //Actualizar
        await product.update(req.body)
        await product.save()

        res.json({data: product})
    } catch (error) {
        console.log(colors.red.bold(error))
    }
}

export const updateAvailability = async (req: Request,res: Response) => {
    try {

        const { id } = req.params
        const product = await Product.findByPk(id)

        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        //Actualizar
        product.availability = !product.dataValues.availability
        await product.save()
        
        res.json({data: product})
    } catch (error) {
        console.log(colors.red.bold(error))
    }
}

export const deleteProductById = async (req: Request,res: Response) => {
    try {

        const { id } = req.params
        const product = await Product.findByPk(id)

        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        await product.destroy()
        res.json({data: `Producto ${req.params.id} eliminado`})
    } catch (error) {
        console.log(colors.red.bold(error))
    }
}