import Cart from "@/Pages/Cart";
import Checkout from "@/Pages/Checkout";
import Home from "@/Pages/Home";
import ManageProducts from "@/Pages/ManageProducts";
import Products from "@/Pages/Products";
import SingleProductPage from "@/Pages/SingleProductPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/products/:productId",
        element: <SingleProductPage />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: '/manage-products',
        element: <ManageProducts />
    }

]);

export default router;