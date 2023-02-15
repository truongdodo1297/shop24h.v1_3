import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, ButtonDropdown, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, Label, Row } from "reactstrap";


const ThanhToan = () => {

    console.log("Trang thanh toán");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { soLuongSanPham } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {

    }
        , [])
    return (
        <main className="TTMain">
            <Row className="">
                <Col xs="8" className="TTTTSanPham"></Col>
                <Col className="TTSoLuong"></Col>
                <hr></hr>
            </Row>

            <Row className="TTKhachHang">


                <Row className="pt-3" style={{ backgroundColor: "white" }}>
                    <h6>THÔNG TIN KHÁCH HÀNG</h6>
                    <Row className="pt-2">
                        <Col xs="3">
                            <Input name="radio1" type="radio" />
                            {' '}
                            <Label check> Anh </Label>
                        </Col>

                        <Col xs="6">
                            <Input name="radio1" type="radio" />
                            {' '}
                            <Label check>Chị </Label>
                        </Col>

                    </Row>
                    <Row className="mt-2 ">
                        <Col xs="4" >
                            <TextField
                                label="Họ và tên"
                                size="small"
                              
                            />
                        </Col>
                        <Col xs="6">
                        <TextField
                                label="Số điện thoại"
                                size="small"
                            />
                        </Col>
                    </Row>
                </Row>

                <Row className="pt-3" style={{ backgroundColor: "white" }}>
                    <h6>CHỌN CÁCH THỨC NHẬN HÀNG</h6>
                    <Row className="pt-3">
                        <Col xs="3">
                            <Input name="radio1" type="radio" />
                            {' '}
                            <Label check> Giao tận nơi </Label>
                        </Col>

                        <Col xs="6">
                            <Input name="radio1" type="radio" disabled />
                            {' '}
                            <Label check>Nhận tại siêu thị </Label>
                        </Col>

                    </Row>
                    <Col xs="10" className="TTVitri">
                        <p>Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có)</p>
                        <Row>
                            <Col xs="5">
                                <Input className="m-3"></Input>
                                <Input className="m-3"></Input>
                            </Col>
                            <Col xs="5">
                                <Input className="m-3"></Input>
                                <Input className="m-3"></Input></Col>
                        </Row>

                    </Col>
                    <Col xs="12" className="pl-2 mt-3">
                        <TextField
                            className="TextField"
                            size="small"
                            label="Yêu cầu khác (không bắt buộc)"
                            style={{
                                width: "550px"
                            }}
                        />
                    </Col>

                    <Row className="mt-4" >

                        <Col xs="12" className="m-1">
                            <Input
                                name="radio1"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>Gọi người khác nhận hàng (nếu có) </Label>
                        </Col>

                        <Col xs="12" className="m-1">
                            <Input
                                name="radio1"
                                type="checkbox"
                            />
                            {' '}
                            <Label check> Hướng dẫn sử dụng, giải đáp thắc mắc </Label>
                        </Col>
                        <Col xs="12" className="m-1">
                            <Input
                                name="radio1"
                                type="checkbox"
                            />
                            {' '}
                            <Label check> Xuất hóa đơn công ty </Label>
                        </Col>
                    </Row>
                    <Row>
                        <hr></hr>
                        <TextField
                            className="TextFieldVoucher"
                            xs="10"
                            size="small"

                            label="Nhập Voucher"
                        />
                    </Row>
                    <Row className="TTTongTien">
                    <Col className="text-right">
                        <h5>Tổng tiền</h5>
                    </Col>
                    <Col className="tongTien">
                        <h5>VND</h5>
                    </Col>
                    <Button className="TTbtnDatHang">ĐẶT HÀNG</Button>
                </Row>
                </Row>

                
            </Row>
        </main>
    )
}
export default ThanhToan;