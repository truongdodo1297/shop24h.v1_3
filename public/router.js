import ProductList from "./pages/productList ";
import ProductInfo from "./pages/productInfo";
import Cart from "./pages/productCart";
import Login from "./pages/login";
import Home from "./pages/home";
import ThanhToan from "./pages/thanhToan";
import Admin from "./pages/admin";
import Sign from "./pages/sign"

const routerList = [
  
    {path:"/product", element: <ProductList/>},
    {path:"/product/:productId", element: <ProductInfo/>},
    {path:"/", element: <Home/>},
    {path:"/cart", element: <Cart/>},
    {path:"/Login", element: <Login/>},
    {path:"/ThanhToan", element: <ThanhToan/>},
    {path:"/admin", element: <Admin/>},
    {path:"/sign", element: <Sign/>}
]
export default routerList;