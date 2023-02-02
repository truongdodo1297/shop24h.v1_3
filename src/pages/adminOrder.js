import { getAllOrder, getOrdertDetail, getOrdertFilter} from "../actions/action";
import { Button, ButtonDropdown, Col, Input, Row, Table, DropdownToggle, DropdownItem, InputGroup, DropdownMenu, Modal, ModalHeader, Label, ModalBody, ModalFooter, CloseButton } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Close } from "@mui/icons-material";
import { FormGroup, TextField } from "@mui/material";
import { width } from "@mui/system";


const AdminOrder = () => {
    const [valueModalOder, setValueModalOder] = useState()
    const [nameModalOder, setNameModalOder] = useState()
    const [dislpayModalOder, setDislpayModalOder] = useState(false)
    const [dislpayBtnTT, setDislpayDislpayBtnTT] = useState("block")
    const [dislpayBtnTT2, setDislpayDislpayBtnTT2] = useState("none")
    const [vSDT, setvSDT] = useState()
    const [vNameCustomer, setvNameCustomer] = useState()

    const [dislpayModalOderDetail, setDisplayModalOderDetail] = useState(false)

    const dispatch = useDispatch();
    const { allOrder} = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        dispatch(getAllOrder())
    }, [dislpayBtnTT])


    // ấn nút xóa order
    const onBtnDeleteOrder = (name, id) => {
        setValueModalOder(id)
        setNameModalOder(name)
        console.log(name)
        setDislpayModalOder(true)
        // thực hiên xóa order    
    }

    const closeModalDeleteOrder = () => {
        setDislpayModalOder(false)
    }
    const changeFilterSDT = (e) => {
        console.log(e.target.value)
        setvSDT(e.target.value)
    }
    const changeFilterName = (e) => {
        setvNameCustomer(e.target.value)
    }
    // ấn nút sửa order
    const onBtnSuaOrder = (id) => {
        dispatch(getOrdertDetail(id))
        setDisplayModalOderDetail(true)
    }
    // thực hiên xóa order    
    const deleteOrder = () => {
        dispatch(deleteOrder(valueModalOder))
    }
    // tìm kiếm order
    const filterOder = () =>{
        let vRaw = {
             fullName: vNameCustomer,
             phone: vSDT
        }
       dispatch(getOrdertFilter(vRaw)) 
    }
    return (
        <>
            <Modal isOpen={dislpayModalOder}>
                <ModalHeader>Bạn có chắc muốn xóa order:  </ModalHeader>
                <ModalBody>
                    <h5>{nameModalOder}</h5>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => deleteOrder()}>Xóa</Button>
                    <Button onClick={()=>closeModalDeleteOrder()}>Đóng</Button>
                </ModalFooter>
            </Modal>
            {allOrder ?
                <>

                    <Row >
                        <Row className="mt-3">
                            <Col xs="2" style={{ display: dislpayBtnTT }}>
                                <Button outline color="primary" onClick={()=>{setDislpayDislpayBtnTT2("block"); setDislpayDislpayBtnTT("none") }} >Tìm kiếm</Button>
                            </Col>
                        </Row >
                        <Row style={{ display: dislpayBtnTT2 }} className="mt-3" >
                            <Row >
                                <Col xs="2">
                                    <Button outline color="success" onClick={()=>filterOder()}>Tìm kiếm</Button>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs="2" >
                                    <TextField size="small" label="Order code"></TextField>
                                </Col>
                                <Col xs="2">
                                    <TextField size="small" label="Số điện thoại" onChange={(e)=>changeFilterSDT(e)}></TextField>
                                </Col>
                                <Col xs="2">
                                    <TextField size="small" label="Tên khách hàng" onChange={(e)=>changeFilterName(e)}></TextField>
                                </Col>
                                <Col xs="2">
                                    <TextField size="small" label="Ngày đặt hàng"></TextField>
                                </Col>
                                <Col><CloseButton className="mt-2" onClick={()=>{setDislpayDislpayBtnTT2("none"); setDislpayDislpayBtnTT("block") }}> </CloseButton></Col>
                            </Row>
                        </Row>

                    </Row>


                    <Table>
                        <thead>
                            <tr>
                                <th>Ngày đặt hàng</th>
                                <th>Tên khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Ưu cầu khác</th>
                                <th className="bg-light text-center" style={{ width: "40%" }}>
                                    Order
                                </th>
                                <th style={{ width: "200px" }}>Trạng thái</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrder.data.map((el, index) => {
                                    return (
                                        <tr>
                                            <td>{moment(el.orderDate).format("DD/MM/YYYY hh:mm:ss")}</td>
                                            <td>{el.customer.fullName}</td>
                                            <td>{el.customer.phone}</td>
                                            <td >Thành phố : {el.customer.address.city}, Huyện: {el.customer.address.distric}, xã/ Đường: {el.customer.address.war}, số nhà: {el.customer.address.apartment}</td>
                                            <td>{el.requirement}</td>
                                            <td >
                                                <td style={{ width: "300px", height: "30px", textAlign: "center" }}>
                                                    <td style={{ textAlign: "center" }}>Sản phẩm</td>
                                                </td>
                                                <td style={{ width: "200px", height: "30px" }}>
                                                    <td  >Màu sắc</td>
                                                </td>
                                                <td style={{ width: "200px", height: "30px" }}>
                                                    <td  >Giá</td>
                                                </td>
                                                {el.order.map((el, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <tr>
                                                                        <td><img style={{ width: "30px" }} src={el.product.imageUrl}></img></td>
                                                                        <td>{el.product.name}</td>
                                                                    </tr>
                                                                </td>
                                                                <td>{el.product.color}</td>
                                                                <td>{el.product.buyPrice}</td>
                                                            </tr>
                                                        </>

                                                    )
                                                })}
                                            </td>
                                            <td>
                                                <select text={el.status} value={el.status}>
                                                    <option>Xác nhận</option>
                                                    <option>Hủy bỏ</option>
                                                    <option>Hoàn tất</option>
                                                    <option>Chờ xác nhận</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "110px" }}>
                                                <Button outline size="sm" color="primary" onClick={() => onBtnSuaOrder(el._id)}>Sửa</Button>
                                                <Button outline size="sm" color="danger" className="m-1" onClick={() => onBtnDeleteOrder(el.name, el._id)}>Xóa</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </> : ""}
        </>
    )
}
export default AdminOrder