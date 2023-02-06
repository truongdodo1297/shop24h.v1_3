
import { Close } from "@mui/icons-material";
import { FormGroup, TextField } from "@mui/material";
import { width } from "@mui/system";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { Button, ButtonDropdown, Col, Input, Row, Table, DropdownToggle, DropdownItem, InputGroup, DropdownMenu, Modal, ModalHeader, Label, ModalBody, ModalFooter, CloseButton } from "reactstrap";
import { deleteCustomer, getAllCustomer, getFilterCustomer, getCustomerDetail } from "../actions/action";

const AdminCustomer = () => {

    const dispatch = useDispatch();
    const { allCustomer, customerDetail } = useSelector((reduxData) => reduxData.shopReducer);
    const [SDTCustomer, setSDTCustomer] = useState()
    const [nameCustomer, setNameCustomer] = useState()
    const [displayBtnTTCustomer, setDisplayBtnTTCustomer] = useState("none")
    const [displayBtnTTCustomer2, setdisplayBtnTTCustomer2] = useState("block")
    const [displayModalDetail, setDisplayModalDetail] = useState(false)
    const [displayModalDelete, setDisplayModalDelete] = useState(false)
    const [vNameCustomer, setvNameCustomer] = useState()
    const [vIdCustomer, setvIdCustomer] = useState()

    useEffect(() => {
        dispatch(getAllCustomer())

    }, [displayBtnTTCustomer, displayModalDetail, displayModalDelete])

    // lấy danh sách khách hàng


    // Customer

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
    const deleteCustomerItem = () => {
        dispatch(deleteCustomer(vIdCustomer))
        setDisplayModalDelete(false)
    }
    const onBtnSua = (id) => {
        dispatch(getCustomerDetail(id))
        setDisplayModalDetail(true)
    }
    
    let styleFilter = {
        marginTop: "5px",
        height: "120px",
        borderRadius: "17px",
        border: "1px solid blue",
        width: "97%",
        padding: "18px",
        marginLeft: "20px"
    }
    let styleProduct = {
        borderRadius: "30px",
        border: "1px solid blue",
        marginTop: "5px",
        width: "97%",
        marginLeft: "20px"
    }
    return (
        <>
            <Modal isOpen={displayModalDelete}>
                <ModalHeader>Bạn có chắc muốn xóa khách hàng:  </ModalHeader>
                <ModalBody>
                    <h5>
                        {vNameCustomer}
                    </h5>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => deleteCustomerItem()}>Xóa</Button>
                    <Button onClick={()=>setDisplayModalDelete(false)}>Đóng</Button>
                </ModalFooter>
            </Modal>
            {customerDetail.data ?
                <>
                    <Modal isOpen={displayModalDetail}>
                        <ModalHeader >Sửa thông tin sản phẩm</ModalHeader>
                        <ModalBody>
                            <TextField className="mt-2" fullWidth label="Tên" size="small" defaultValue={customerDetail.data.fullName} ></TextField>
                            <TextField className="mt-2" fullWidth label="Số điện thoại " size="small" defaultValue={customerDetail.data.phone} ></TextField>
                            <TextField className="mt-2" fullWidth label="Địa chỉ" size="small" defaultValue={customerDetail.data.address.city} ></TextField>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" type="submit" >
                                Cập nhập
                            </Button>
                            <Button color="secondary" onClick={() => setDisplayModalDetail(false)} >
                                Đóng
                            </Button>
                        </ModalFooter>
                    </Modal>

                </> : ""}

            <Row style={styleFilter}>
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
            <Col style={styleProduct}>
                <Table>
                    <thead>
                        <tr>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            {/* <th>Email</th> */}
                            <th className=" text-center" style={{ width: "50%" }}>
                                Địa chỉ
                            </th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {allCustomer.data ?
                            <>
                                {allCustomer.data.map((el, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{el.fullName}</td>
                                            <td>0{el.phone}</td>
                                            {/* <td>{el.email}</td> */}
                                            <td >Thành phố : {el.address.city}, Huyện: {el.address.distric}, xã/ Đường: {el.address.war}, số nhà: {el.address.apartment}</td>
                                            <td>
                                                <Button  className="me-1 mb-1" outline size="sm" color="primary" onClick={() => onBtnSua(el._id)} >Sửa</Button>
                                                <Button outline size="sm" color="danger" onClick={() => {setvIdCustomer(el._id); setvNameCustomer(el.fullName); setDisplayModalDelete(true)}}  >Xóa</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </>
                            : ""
                        }
                    </tbody>
                </Table>
            </Col>

        </>
    )
}

export default AdminCustomer