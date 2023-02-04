import { Row, Col, Label, ButtonGroup, Button, Container, InputGroup, ButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem, Input } from "reactstrap";
import { FormControl, InputLabel, MenuItem, Select, TextField, Grid } from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPIAddUserProductDetail, removeProduct, subtractionSL, addNewSL } from "../actions/action";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { json, useNavigate } from "react-router-dom";
const ProductCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [city, setCity] = useState([]);

    const { soLuongSanPham } = useSelector((reduxData) => reduxData.shopReducer);
    const saveData = JSON.parse(localStorage.getItem("item", "[]")) || [];
    const [count, setCount] = useState(0)
    useEffect(() => {
        dispatch(callAPIAddUserProductDetail());
        fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(response => response.json())
            .then(data => {
                setCity(data)
                // console.log(data);
            });
    }
        , [count])

    const [displayNguoiNhanHang, setDisplayNguoiNhanHang] = useState({ display: "none" });
    const tangSoLuong = (id) => {
        dispatch(addNewSL())
        let i = saveData.findIndex((el) => el.Product === id)
        if (i != -1) {
            saveData[i].quantity++;
            localStorage.setItem("item", JSON.stringify(saveData));
        }
    }
    const giamSoLuong = (id) => {
        dispatch(subtractionSL())
        let i = saveData.findIndex((el) => el.Product === id)
        if (i != -1) {
            saveData[i].quantity--;
            // đẩy dữ liệu các sản phẩm lên local storage
            localStorage.setItem("item", JSON.stringify(saveData));
        }
    }

    const btnRemove = (id) => {
        console.log("move");
        let i = saveData.findIndex((el) => el.Product === id)
        if (i != -1) {
            saveData.splice(i, 1);
            // đẩy dữ liệu các sản phẩm lên local storage
            localStorage.setItem("item", JSON.stringify(saveData));
        }
    }
    const tongTien = saveData.reduce((sumary, item) => sumary + item.price * item.quantity, 0);

    const changeDisplay = () => {
        setDisplayNguoiNhanHang({ display: 'block' })
    }
    const [soLuongSp, setsoLuongSP] = useState(1)
    // const [tongTien, settongTien] = useState(0)
    const [cityName, setCityName] = useState()
    const [districtName, setdistrictName] = useState()
    const [wardstName, setWardstName] = useState()
    const cityChange = (e) => {
        setCityNameOrder(city[e.target.value].Name)
        console.log(city[e.target.value].Name)
        setCityName(e.target.value)
        setdistrictName(city[e.target.value].Districts)
    }
    const districChange = (e) => {
        console.log(districtName[e.target.value].Name)
        setDistricOrder(districtName[e.target.value].Name)
        setWardstName(districtName[e.target.value].Wards)
    }
    const warChange = (e) => {
        console.log(e.target.value)
        setWarOrder(e.target.value)
    }
    const apartmentChange = (e) => {
        console.log(e.target.value)
        setApartment(e.target.value)
    }
    const [fullName, setFullName] = useState()
    const [phone, setPhone] = useState()
    const [cityNameOrder, setCityNameOrder] = useState()
    const [districOrder, setDistricOrder] = useState()
    const [warOrder, setWarOrder] = useState()
    const [apartment, setApartment] = useState()
    const [sexBoy, setSexBoy] = useState(false)
    const [sexGirl, setSexGirl] = useState(false)
    const [sex, setCheckedSex] = useState()
    const [requirement, setRequirement] = useState()
    const changePhone = (e) => {
        setPhone(e.target.value)
    }
    const changeRequirement = (e) => {
        console.log(e.target.value)
        setRequirement(e.target.value)
    }

    const changeSexBoy = () => {
        setSexBoy(!sexBoy)
        setSexGirl(false)
        if (sexBoy == false) {
            setCheckedSex("Anh")
        }
    }
    const changeSexGirl = () => {
        setSexGirl(!sexGirl)
        console.log(sexGirl)

        setSexBoy(false)
        if (sexGirl == false) {
            setCheckedSex("Chị")
            console.log("Chị")

        }
    }
    const changeName = (e) => {
        setFullName(e.target.value)
    }

    const datHang = () => {
        // if(fullName == undefined){
        //     alert("!!")
        //     return
        // }
        // if(phone == undefined){
        //     alert("!!")
        //     return
        // }
        // if(sex == undefined){
        //     alert("!!")
        //     return
        // }
        // if(cityNameOrder == undefined){
        //     alert("!!")
        //     return
        // }
        // if(districOrder == undefined){
        //     alert("!!")
        //     return
        // }
        // if(warOrder == undefined){
        //     alert("!!")
        //     return
        // }
        let orderProduct = saveData.map((function (item) {
            return {
                product: item.Product,
                quantity: item.quantity
            }
        }))
        console.log(orderProduct)
        let raw = JSON.stringify({
            orderCode: createOrderCode(),
            fullName: fullName,
            phone: phone,
            sex: sex,
            address: {
                city: cityNameOrder,
                distric: districOrder,
                war: warOrder,
                apartment: apartment
            },
            requirement: requirement,
            order: orderProduct
        })

        console.log(raw)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = fetch("http://localhost:8000/post-order", requestOptions);
        const data = response.json()
        console.log("post order")
        console.log(data)

    }
    const createOrderCode = () => {
        let Number1 = Math.floor(Math.random() * 100)
        Number1 = Number1 < 10 ? "0" + Number1 : Number1
        let Number2 = Math.floor(Math.random() * 100)
        Number2 = Number2 < 10 ? "0" + Number2 : Number2
        let Number3 = Math.floor(Math.random() * 100)
        Number3 = Number3 < 10 ? "0" + Number3 : Number3
        let oderCode = Number1.toString() + Number2.toString() + Number3.toString();
        console.log(oderCode)
        return oderCode;
    }
    return (
        <>
            {
                saveData ?
                    <>
                        <Row className="shopHead">
                            <h2 className="shopHeadH2">Your bag total is {tongTien.toLocaleString()} $.</h2>
                            <p className="rowInfoP">Free delivery and free returns.</p>
                            <Container>
                                <Button className="btnAddToCard" >Check Out</Button>
                            </Container>

                        </Row>
                        
                        <Row className="mt-4">
                            <hr className="shopHr"></hr>
                            <Col xs="12" md = "" className="CartSP ">
                                {
                                    saveData.map((el, index) => {
                                        return (
                                            <>
                                                <Row className="shopItem">
                                                   
                                                        <Col xs="3" className="shopImg">
                                                            <img src={el.imgUrl} />
                                                        </Col>
                                                        <Col xs="9" className="shopInfo">

                                                            <Row className="shopDiv" >
                                                                <Col xs="5">
                                                                    <h2 className="shopH2">
                                                                        {el.name}</h2>
                                                                </Col>
                                                                <Col className=" mt-3 " >
                                                                    <ButtonGroup size="sm">
                                                                        <Button outline
                                                                            onClick={() => giamSoLuong(el.Product)}
                                                                        >-</Button>
                                                                        <Button outline size="sm">{el.quantity}</Button>
                                                                        <Button outline size="sm"
                                                                            onClick={() => tangSoLuong(el.Product)}
                                                                        >+</Button>
                                                                    </ButtonGroup>
                                                                </Col>
                                                                <Col className="shopPrice">
                                                                    <h3>${(el.price * el.quantity).toLocaleString()} </h3>
                                                                    <p className="shopP" onClick={() => btnRemove(el.Product)}>Remove</p>
                                                                </Col>
                                                                <hr className="shopHr2"></hr>
                                                            </Row>

                                                            <div className="d-flex pt-3 pb-3">
                                                                <CardGiftcardIcon></CardGiftcardIcon>
                                                                <p className="shopPriceP">Add a gift message</p>
                                                                <Col className="shopP">  <p>Add</p> </Col>
                                                            </div>
                                                            <Row>
                                                                <hr className="shopHr2"></hr>
                                                                <Col xs="12" >
                                                                    <p className="shopPriceP ">Find out how soon you can get this item</p>
                                                                    <LocalMallIcon></LocalMallIcon>
                                                                    <span style={{ marginLeft: "10px", marginTop: "95px" }}>In stock and ready to ship.</span>
                                                                </Col>
                                                                {/* <Col>
                                                                <p className="shopPriceP" href="/">Enter zip code</p>
                                                            </Col> */}
                                                            </Row>
                                                        </Col>
                                                        <hr className="shopHr"></hr>
                                                </Row>
                                            </>)
                                    }
                                    )
                                }
                            </Col>

                            {saveData ?
                                <Col className="cartTTKhachHang">
                                    <Row className="TTKhachHang">
                                        <Row className="pt-3">
                                            <h6>THÔNG TIN KHÁCH HÀNG</h6>
                                            <Row className="pt-2">
                                                <Col xs="3">
                                                    <Input type="radio" checked={sexBoy} onClick={() => changeSexBoy()} />
                                                    <Label check> Anh </Label>
                                                </Col>

                                                <Col xs="6">
                                                    <Input type="radio" checked={sexGirl} onClick={() => changeSexGirl()} />
                                                    <Label check>Chị </Label>
                                                </Col>

                                            </Row>
                                            <Row className="mt-2 ">
                                                <Col xs="4" >
                                                    <TextField
                                                        label="Họ và tên"
                                                        size="small"
                                                        onChange={changeName}

                                                    />
                                                </Col>
                                                <Col xs="6">
                                                    <TextField
                                                        label="Số điện thoại"
                                                        size="small"
                                                        onChange={changePhone}
                                                    />
                                                </Col>
                                            </Row>
                                        </Row>

                                        <Row className="pt-3" >
                                            <h6>CHỌN CÁCH THỨC NHẬN HÀNG</h6>
                                            <Row className="pt-3">
                                                <Col xs="3">
                                                    <Input type="radio" checked={true} />
                                                    <Label check > Giao tận nơi </Label>
                                                </Col>

                                                <Col xs="6">
                                                    <Input type="radio" disabled />
                                                    <Label check>Nhận tại siêu thị </Label>
                                                </Col>

                                            </Row>
                                            <Col xs="10" className="TTVitri">
                                                <p>Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có)</p>
                                                <Row >
                                                    <Col xs="6" >
                                                        <Col>
                                                            {city ?
                                                                <FormControl style={{ width: "180px", paddingTop: "4px" }}>
                                                                    <InputLabel >Chọn tỉnh / Thành phố</InputLabel>
                                                                    <Select
                                                                        size="small"
                                                                        onChange={cityChange}>
                                                                        {/* <MenuItem value={'none'}></MenuItem> */}
                                                                        {city.map((value, index) => {
                                                                            return <MenuItem value={index} >{value.Name}</MenuItem>
                                                                        }
                                                                        )}
                                                                    </Select>
                                                                </FormControl>
                                                                :
                                                                <Select>
                                                                    <MenuItem value={'none'}>Tỉnh/Thành phố</MenuItem>
                                                                </Select>
                                                            }
                                                        </Col>

                                                        <Col className="mt-3">
                                                            <FormControl style={{ width: "180px", paddingTop: "4px" }}>
                                                                <InputLabel >Chọn Phường / Xã</InputLabel>
                                                                <Select
                                                                    size="small"
                                                                    onChange={warChange}>
                                                                    <MenuItem value={'none'}>Tỉnh/Thành phố</MenuItem>
                                                                    {wardstName ? wardstName.map((value, index) => {
                                                                        return <MenuItem value={value.Name} >{value.Name}</MenuItem>
                                                                    }
                                                                    ) :
                                                                        <Select>
                                                                            <MenuItem value={'none'}>Chọn Phường / Xã</MenuItem>
                                                                        </Select>}
                                                                </Select>

                                                            </FormControl>
                                                        </Col>

                                                    </Col>

                                                    <Col>
                                                        <Col xs="5">
                                                            <FormControl style={{ width: "180px", paddingTop: "4px" }}>
                                                                <InputLabel >Chọn Quận / Huyện</InputLabel>
                                                                <Select
                                                                    size="small"
                                                                    onChange={districChange}>
                                                                    <MenuItem value={'none'}></MenuItem>
                                                                    {districtName ? districtName.map((value, index) => {
                                                                        return <MenuItem value={index}>{value.Name}</MenuItem>
                                                                    }
                                                                    ) :
                                                                        <Select>
                                                                            <MenuItem value={'none'}></MenuItem>
                                                                        </Select>}
                                                                </Select>

                                                            </FormControl>

                                                        </Col>

                                                        <Col xs="5">
                                                            <TextField
                                                                className="TTInputDiaChi mt-3"
                                                                xs="10"
                                                                size="small"
                                                                label="Số nhà, tên đường"
                                                            />
                                                        </Col></Col>
                                                </Row>

                                            </Col>
                                            <Col xs="6" className="pl-2 mt-3">
                                                <TextField
                                                    onChange={changeRequirement}
                                                    className="TextField"
                                                    size="small"
                                                    label="Yêu cầu khác (không bắt buộc)"
                                                    style={{
                                                        width: "400px"
                                                    }}
                                                />
                                            </Col>

                                            <Row>
                                                <Col>
                                                    <hr></hr>
                                                    <TextField
                                                        className="TextFieldVoucher"
                                                        xs="10"
                                                        size="small"
                                                        label="Nhập Voucher"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="TTTongTien">
                                                <hr></hr>
                                                <Col className="text-right">
                                                    <h5>Tổng tiền</h5>
                                                </Col>
                                                <Col className="TTColTongTien">
                                                    <h5>{tongTien} $</h5>
                                                </Col>
                                                <Button className="TTbtnDatHang" onClick={() => datHang()}>ĐẶT HÀNG</Button>
                                            </Row>
                                        </Row>
                                    </Row>
                                </Col>
                                : ""}
                        </Row>


                    </>

                    :
                    <h1>mua sam them</h1>
            }


        </>
    )
}




export default ProductCard;