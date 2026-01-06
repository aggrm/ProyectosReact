import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { action as updateAvailabilityAction, loader as produtsLoader} from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, { loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProdutAction } from "./components/ProductDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element:<Products />,
                loader: produtsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', //ROA Pattern - Resource-oriented desing
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar', //ROA Pattern - Resource-oriented desing
                action: deleteProdutAction
            },
        ]
    }
])