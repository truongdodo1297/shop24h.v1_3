import ProductList from "./pages/productList ";
import ProductInfo from "./pages/productInfo";
import Card from "./pages/productCard";
import Login from "./pages/login";

const routerList = [
  
    {path:"/product", element: <ProductList/>},
    {path:"/product/:productId", element: <ProductInfo/>},
    {path:"/", element: <Login/>},
    {path:"/card", element: <Card/>},
]
export default routerList;