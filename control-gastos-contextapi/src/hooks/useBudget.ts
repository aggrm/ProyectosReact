import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

export const useBudget = () => {
    const contex = useContext(BudgetContext)
    if(!contex){
        throw new Error('useBudget, tiene que ser usado dentro de un BudgetProvider')
    }
    return contex
}