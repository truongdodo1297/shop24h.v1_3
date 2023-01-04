import { Route, Routes } from "react-router-dom";
import routerList from "../router";
import ProductList from "../pages/productList ";

function Body (){
    return(        
        <>
            <Routes>
                {routerList.map((route,index)=>{
                    if(route.path){
                        return <Route key={index} path = {route.path} element = {route.element}></Route>
                    }
                    else{
                      return  null
                    }
                })}
                 <Route path="*" element={<ProductList/>}></Route>
            </Routes>
        </>
    )
}
export default Body;