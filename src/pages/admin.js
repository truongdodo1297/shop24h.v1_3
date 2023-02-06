import { useState } from "react";
import { Col, Row } from "reactstrap";
import AdminCustomer from "./adminCustomer";
import AdminOrder from "./adminOrder";
import AdminProduct from "./adminProduct";


const Admin = () => {
    const [adminCustomer, setAdminCustomer] = useState("none")
    const [adminOrder, setAdminOrder] = useState("none")
    const [adminProduct, setAminProduct] = useState("none")
    const displayCustomer = () => {
        setAdminCustomer("block")
        setAdminOrder("none")
        setAminProduct("none")
        setColorCustomerList("red")
        setColorProductList("black")
        setColorOrderList("black")
    }
    const displayOrder = () => {
        setAdminCustomer("none")
        setAdminOrder("block")
        setAminProduct("none")
        setColorCustomerList("black")
        setColorProductList("black")
        setColorOrderList("red")


    }
    const displayProduct = () => {
        setAdminCustomer("none")
        setAdminOrder("none")
        setAminProduct("block")
        setColorOrderList("black")
        setColorCustomerList("black")
        setColorProductList("red")
    }
    let styleFilter = {
        marginTop: "5px",
        borderRadius: "17px",
        border: "1px solid blue",
        padding: "18px"
    }
    const [colorProductList, setColorProductList]  = useState("red")
    const [colorCustomerList, setColorCustomerList]  = useState("red")
    const [colorOrderList, setColorOrderList]  = useState("red")
    return (
        <>
            <Row >
                <Col xs="2" md = "1" style={styleFilter} className = "AM_list">
                    <Row className="mt-3"  onClick={() => displayProduct()}>
                        <h6 style={{color: colorProductList }} >Danh sách sản phẩm</h6>
                        <hr></hr>
                    </Row>
                    <Row onClick={() => displayCustomer()}>
                        <h6 style={{color: colorCustomerList }}>Danh sách khách hàng</h6>
                        <hr></hr>
                    </Row>
                    <Row onClick={() => displayOrder()}>
                        <h6 style={{color: colorOrderList }}> Tất cả Order</h6>
                        <hr></hr>
                    </Row>
                </Col>

                <Col>
                    <Row style={{ display: adminProduct }}><AdminProduct></AdminProduct></Row>
                    <Row style={{ display: adminCustomer }}><AdminCustomer></AdminCustomer></Row>
                    <Row style={{ display: adminOrder }}><AdminOrder></AdminOrder></Row>
                </Col>

            </Row>
        </>
    )
}
export default Admin