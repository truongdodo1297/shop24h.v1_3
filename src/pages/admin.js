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
    }
    const displayOrder = () => {
        setAdminCustomer("none")
        setAdminOrder("block")
        setAminProduct("none")
    }
    const displayProduct = () => {
        setAdminCustomer("none")
        setAdminOrder("none")
        setAminProduct("block")
    }
    return (
        <>
            <Row>
                <Col xs="2">
                    <Row className="bg-danger mt-3" onClick={() => displayProduct()}>
                        <h6>Danh sách sản phẩm</h6>
                    </Row>
                    <Row className="bg-danger mt-3" onClick={() => displayCustomer()}>
                        <h6>Danh sách khách hàng</h6>
                    </Row>
                    <Row className="bg-danger mt-3" onClick={() => displayOrder()}>
                        <h6>Tất cả Order</h6>
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