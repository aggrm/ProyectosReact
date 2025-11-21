import { useState } from "react"
import type {MenuItem, OrderItem} from "../types"

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id);

        if(itemExist){
           const updateOrder = order.map( orderItime => orderItime.id === item.id ? 
            {...orderItime, quantity:orderItime.quantity + 1} : orderItime)
            setOrder(updateOrder)
        }else{
            const newItem ={...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    return{
        order,
        addItem
    }
}