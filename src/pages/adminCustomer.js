
import { Close } from "@mui/icons-material";
import { FormGroup, TextField } from "@mui/material";
import { width } from "@mui/system";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { Button, ButtonDropdown, Col, Input, Row, Table, DropdownToggle, DropdownItem, InputGroup, DropdownMenu, Modal, ModalHeader, Label, ModalBody, ModalFooter, CloseButton } from "reactstrap";
import {
    getAllOrder, getAllProduct, getAllCustomer, getFilterCusromerBySDT,
    postProduct, deleteProduct, getProductDetail, putProduct, clearModal,
    deleteOrder, getOrdertDetail, getFilterCustomer
} from "../actions/action";





const AdminCustomer = () => {

    const dispatch = useDispatch();
    const {  allCustomer } = useSelector((reduxData) => reduxData.shopReducer);

    useEffect(() => {
        dispatch(getAllCustomer())

    }, [])

    // lấy danh sách khách hàng
   

    // Customer
    const [SDTCustomer, setSDTCustomer] = useState()
    const [nameCustomer, setNameCustomer] = useState()
    const [displayBtnTTCustomer, setDisplayBtnTTCustomer] = useState("none")
    const [displayBtnTTCustomer2, setdisplayBtnTTCustomer2] = useState("block")

    const filterCustomer = () => {
        dispatch(getFilterCustomer(nameCustomer, SDTCustomer))
    }
    // lấy giá trị customer
    const changeNameCustomer = (e) => {
        console.log(e.target.value)
        setNameCustomer(e.target.value)
    }
    const changeSDTCustomer = (e) => {
        setSDTCustomer(e.target.value)
    }

    const onBtnTimKiem = (e) => {
        setDisplayBtnTTCustomer("block")
        setdisplayBtnTTCustomer2("none")
    }
    const CloseButtonTimKiem = (e) => {
        setDisplayBtnTTCustomer("none")
        setdisplayBtnTTCustomer2("block")
    }

    return (
        <>
            <Row className="mt-4">
                <Row>
                    <Col xs="2" style={{ display: displayBtnTTCustomer2 }}>
                        <Button outline color="primary" onClick={() => onBtnTimKiem()}>Tìm kiếm</Button>
                    </Col>
                </Row >
                <Row style={{ display: displayBtnTTCustomer }} >
                    <Row >
                        <Col xs="2">
                            <Button outline color="success" onClick={() => filterCustomer()}>Tìm kiếm</Button>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs="2" >
                            <TextField onChange={(e) => changeNameCustomer(e)} size="small" label="Tên khách hàng"></TextField>
                        </Col>
                        <Col xs="2">
                            <TextField defaultValue={0} onChange={(e) => changeSDTCustomer(e)} size="small" label="Số điện thoại"></TextField>
                        </Col>
                        <Col><CloseButton className="mt-2" onClick={() => CloseButtonTimKiem()}></CloseButton></Col>
                    </Row>
                </Row>

            </Row>
            <Table>
                <thead>
                    <tr>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        {/* <th>Email</th> */}
                        <th className="bg-light text-center" style={{ width: "50%" }}>
                            Địa chỉ
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(allCustomer.data)}
                    {allCustomer.data ?
                        <>
                            {allCustomer.data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{el.fullName}</td>
                                        <td>0{el.phone}</td>
                                        {/* <td>{el.email}</td> */}
                                        <td >Thành phố : {el.address.city}, Huyện: {el.address.distric}, xã/ Đường: {el.address.war}, số nhà: {el.address.apartment}</td>
                                    </tr>
                                )
                            })}
                        </>
                        : <h1>??</h1>
                    }
                </tbody>
            </Table>
        </>
    )
}

export default AdminCustomer