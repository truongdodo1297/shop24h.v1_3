import { getAllOrder, getOrdertDetail, getOrdertFilter } from "../actions/action";
import { Button, ButtonDropdown, Col, Input, Row, Table, DropdownToggle, DropdownItem, InputGroup, DropdownMenu, Modal, ModalHeader, Label, ModalBody, ModalFooter, CloseButton } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { InputLabel, Pagination, Stack, TextField } from "@mui/material";
import { deleteOrder, changePaginationOder } from "../actions/action"


const AdminOrder = () => {
    const [valueModalOder, setValueModalOder] = useState()
    const [nameModalOder, setNameModalOder] = useState()
    const [dislpayModalOder, setDislpayModalOder] = useState(false)
    const [dislpayBtnTT, setDislpayDislpayBtnTT] = useState("block")
    const [dislpayBtnTT2, setDislpayDislpayBtnTT2] = useState("none")
    const [vSDT, setvSDT] = useState()
    const [vOrderCode, setvOrderCode] = useState()
    const [vStartDay, setvStartDay] = useState("")
    const [vEndDay, setvEndDay] = useState("")
    const [vNameCustomer, setvNameCustomer] = useState()

    const [dislpayModalOderDetail, setDisplayModalOderDetail] = useState(false)


    const dispatch = useDispatch();
    const { allOrder, currentPageOrder, limit, totalOrder } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        dispatch(getAllOrder( currentPageOrder, limit))
    }, [dislpayModalOder, dislpayBtnTT2, currentPageOrder])
    const noPage = Math.ceil(totalOrder/ limit);

    const onChangePaginationOrder = (e,value) => {
        dispatch(changePaginationOder(value))
    }

    // ấn nút xóa order
    const onBtnDeleteOrder = (name, id) => {
        setValueModalOder(id)
        setNameModalOder(name)
        console.log(id)
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
    const changeFilterOrderCode = (e) => {
        setvOrderCode(e.target.value)
    }
    // ấn nút sửa order
    const onBtnSuaOrder = (id) => {
        dispatch(getOrdertDetail(id))
        setDisplayModalOderDetail(true)
    }
    // thực hiên xóa order    
    const deleteOrderItem = () => {
        setDislpayModalOder(false)
        dispatch(deleteOrder(valueModalOder))
    }
    // tìm kiếm order
    const filterOder = () => {
        let vRaw = {
            fullName: vNameCustomer,
            phone: vSDT,
            orderCode: vOrderCode,
            endDay: vEndDay,
            startDay: vStartDay
        }
        dispatch(getOrdertFilter(vRaw))
    }
    let styleFilter = {
        marginTop: "5px",
        height: "120px",
        borderRadius: "17px",
        border: "1px solid blue",
        // width: "97%",
        padding: "18px",
        marginLeft: "20px"
    }
    let styleProduct = {
        borderRadius: "30px",
        border: "1px solid blue",
        marginTop: "5px",
        // width: "97%",
        marginLeft: "20px",
        oveflow: "wap"

    }
    return (
        <>
            <Modal isOpen={dislpayModalOder}>
                <ModalHeader>Bạn có chắc muốn xóa order:  </ModalHeader>
                <ModalBody>
                    <h5>{nameModalOder}</h5>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => deleteOrderItem()}>Xóa</Button>
                    <Button onClick={() => closeModalDeleteOrder()}>Đóng</Button>
                </ModalFooter>
            </Modal>
            {allOrder ?
                <>

                    <Col style={styleFilter} xs="11" >
                        <Row >
                            <Col xs="3" style={{ display: dislpayBtnTT }}>
                                <Button outline color="primary" onClick={() => { setDislpayDislpayBtnTT2("block"); setDislpayDislpayBtnTT("none") }} >Tìm kiếm</Button>
                            </Col>
                        </Row >
                        <Row style={{ display: dislpayBtnTT2 }} >
                            <Row >
                                <Col xs="3">
                                    <Button outline color="success" onClick={() => filterOder()}>Tìm kiếm</Button>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col xs="2" >
                                    <TextField size="small" label="Order code" onChange={(e) => changeFilterOrderCode(e)}></TextField>
                                </Col>
                                <Col xs="2">
                                    <TextField size="small" label="Số điện thoại" onChange={(e) => changeFilterSDT(e)}></TextField>
                                </Col>
                                <Col xs="2">
                                    <TextField size="small" label="Tên khách hàng" onChange={(e) => changeFilterName(e)}></TextField>
                                </Col>
                                <Col xs="2">
                                    <Input type="date" label="Ngày bắt đầu" onChange={(e) => { setvStartDay(e.target.value); console.log(vStartDay) }} />
                                </Col>
                                <Col xs="2">
                                    <Input type="date" onChange={(e) => setvEndDay(e.target.value)} />
                                </Col>
                                <Col><CloseButton className="mt-2" onClick={() => { setDislpayDislpayBtnTT2("none"); setDislpayDislpayBtnTT("block") }}> </CloseButton></Col>
                            </Row>
                        </Row>

                    </Col>

                    <Col xs="11" style={styleProduct} >
                        <Table className="" xs="11">
                            <thead>
                                <tr>
                                    <th>Order Code</th>
                                    <th>Ngày đặt hàng</th>
                                    <th>Tên khách hàng</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Ưu cầu khác</th>
                                    <th className="text-center" >
                                        Order
                                    </th>
                                    {/* <th >Trạng thái</th> */}
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrder.data.map((el, index) => {
                                        return (
                                            <tr key={el.orderCode}>
                                                <td >{el.orderCode}</td>
                                                <td>{moment(el.orderDate).format("MM/DD/YYYY hh:mm:ss")}</td>
                                                <td>{el.customer.fullName}</td>
                                                <td>{el.customer.phone}</td>
                                                <td >Thành phố : {el.customer.address.city}, Huyện: {el.customer.address.distric}, xã/ Đường: {el.customer.address.war}, số nhà: {el.customer.address.apartment}</td>
                                                <td>{el.requirement}</td>
                                                <td >
                                                    <td style={{ height: "30px" }}>
                                                        Sản phẩm
                                                    </td>
                                                    <td>
                                                        Màu sắc
                                                    </td>
                                                    <td >
                                                        giá
                                                    </td>
                                                    {el.order.map((el, index) => {
                                                        return (
                                                            <>
                                                                <tr key={index}>
                                                                    <td>
                                                                        <tr>
                                                                            <td><img style={{ width: "50px" }} src={el.product.imageUrl}></img></td>
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
                                                {/* <td>
                                                    <select text={el.status} value={el.status}>
                                                        <option>Xác nhận</option>
                                                        <option>Hủy bỏ</option>
                                                        <option>Hoàn tất</option>
                                                        <option>Chờ xác nhận</option>
                                                    </select>
                                                </td> */}
                                                <td >
                                                    <Button className="me-1 mb-1" outline size="sm" color="primary" onClick={() => onBtnSuaOrder(el._id)}>Sửa</Button>
                                                    <Button outline size="sm" color="danger" onClick={() => onBtnDeleteOrder(el.name, el._id)}>Xóa</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>

                </> : ""}
            <Stack direction="row" justifyContent="flex-end" p="30px" pr="70px" mt="50px">
                <Pagination count={noPage} defaultPage={currentPageOrder} onChange={onChangePaginationOrder} variant="outlined" shape="rounded" />
            </Stack>
        </>
    )
}
export default AdminOrder