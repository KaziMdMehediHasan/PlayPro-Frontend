import Cart from "@/Pages/Cart";
import Home from "@/Pages/Home";
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

]);

export default router;