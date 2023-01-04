import Test from "./pages/test";
import ProductList from "./pages/productList ";
import ProductIfo from "./pages/productIfo";
import Login from "./pages/login";

const routerList = [
  
    {path:"/product", element: <ProductList/>},
    {path:"/product/:productId", element: <ProductIfo/>},
    {path:"/", element: <Login/>},
]
export default routerList;