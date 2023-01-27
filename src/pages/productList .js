import { Pagination, Rating } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Input, Label, Row, Spinner } from "reactstrap";
import { callAPI, btnLoc, onclickCard, changePagination } from "../actions/action";
import "../App.css";
import { useNavigate } from "react-router-dom";


const ProductList = () => {

    const dispatch = useDispatch();
    const { product, statusPending, totalProduct, limit, currentPage } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        dispatch(callAPI(currentPage,limit))
    }, [currentPage])

    const [rating, setRating] = useState();
    const [price, setPrice] = useState();
    const [color, setColor] = useState();
    const [brand, setBrand] = useState();

    const onBtnLoc = () => {
        const valueFilter = {
            rating: rating,
            color: color,
            brand: brand,
            price: price
        }
        console.log(valueFilter);
        dispatch(btnLoc(valueFilter));
    }
    const productDetail = (id) => {
        navigate("/product/" + id)
    }
    const navigate = useNavigate();

    const [statusVot1, setStatusVot1] = useState(false);
    const [statusVot2, setStatusVot2] = useState(false);
    const [statusVot3, setStatusVot3] = useState(false);
    const [statusVot4, setStatusVot4] = useState(false);
    const [statusVot5, setStatusVot5] = useState(false);
    const [statusColorDen, setStatusColorDen] = useState(false);
    const [statusColorTrang, setStatusColorTrang] = useState(false);
    const [brandDEVIA, setBrandDEVIA] = useState(false);
    const [brandIPHONE, setBrandIPHONE] = useState(false);
    const [brandXiaomi, setbrandXiaomi] = useState(false);
    const [brandNo, setBrandNo] = useState(false);
    const [priceTren200, setPriceTren200] = useState(false);
    const [priceDuoi200, setPriceDuoi200] = useState(false);
    const [priceTren1000, setPriceTren1000] = useState(false);
    const noPage = Math.ceil(totalProduct / limit);
    // console.log(noPage)
    const onChangePagination = (event, value) => {
        console.log("change page")
        dispatch(changePagination(value));
    }

    return (
        <>
            {
                statusPending ?
                    <Row style={{height: "500px"}} >
                        <Spinner color="warning" style={{marginLeft: "700px", marginTop: "200px",padding: "30px" }}></Spinner>
                    </Row>
                    :
                    <Row className="d-flex mt-5">
                        <Col xs="0" sm = "3" style={{ paddingLeft: "90px" }}>
                            <Container className="mt-3">
                                <h4>Caregories</h4>
                                <Container style={{ display: "block" }}>
                                    <h3 href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black", paddingTop: "30px" }}>Wireless</h3><br></br>
                                    <h3 href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</h3><br></br>
                                    <h3 href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</h3><br></br>
                                    <h3 href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</h3><br></br>
                                    <h3 href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</h3><br></br>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Brands</h4>
                                <Container>
                                    <Input type="checkbox" checked={brandDEVIA} value={"DEVIA"} onChange={() => { setBrandDEVIA(!brandDEVIA); setBrand("DEVIA") }} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>DEVIA</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={brandIPHONE} value={"IPHONE"} onChange={() => { setBrandIPHONE(!brandIPHONE); setBrandDEVIA(false); setBrand("IPHONE") }} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>IPHONE</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" checked={brandXiaomi} value={"Xiaomi"} onChange={() => { setbrandXiaomi(!brandXiaomi); setBrandIPHONE(false); setBrandDEVIA(false); setBrand("Xiaomi") }} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>XIAOMI</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" checked={brandNo} value={"undefined"} onChange={() => { setBrandNo(!brandNo); setbrandXiaomi(false); setBrandIPHONE(false); setBrandDEVIA(false); setBrand("undefined") }} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>BRAND KHÁC</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBL</Label>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Color</h4>
                                <Container>
                                    <Input type="checkbox" checked={statusColorTrang} value={"trang"} onChange={() => { setColor("trang"); setStatusColorTrang(!statusColorTrang); setStatusColorDen(false) }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trắng</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={statusColorDen} value={"den"} onClick={() => { setColor("den"); setStatusColorDen(!statusColorDen); setStatusColorTrang(false) }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Đen</Label>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Price</h4>
                                <Row style={{ marginLeft: "-50px", marginTop: "25px" }}>
                                    <Col>
                                        <Input size="2"></Input>
                                    </Col>
                                    <Col xs="1">-</Col>
                                    <Col>
                                        <Input ></Input>
                                    </Col>
                                </Row>
                                <Container className="pt-3">
                                    <Input type="checkbox"  checked = {priceTren200} onClick={() => { setPrice(201);setPriceTren200(!priceTren200); setPriceTren1000(false);setPriceDuoi200(false) }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trên 200 </Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox"   checked = {priceDuoi200} onClick={() => { setPrice(199); setPriceTren200(false); setPriceTren1000(false);setPriceDuoi200(!priceDuoi200)  }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Dưới 200</Label>
                                </Container>   <Container>
                                    <Input type="checkbox"  checked = {priceTren1000} onClick={() => { setPrice(1001); setPriceTren200(false); setPriceTren1000(!priceTren1000);setPriceDuoi200(false)  }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trên 1000</Label>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Rating</h4>
                                <Container>
                                    <Input type="checkbox" checked={statusVot5} defaultValue={5} value={true} onClick={() => { setRating(5); setStatusVot1(false); setStatusVot2(false); setStatusVot3(false); setStatusVot4(false); setStatusVot5(!statusVot5) }} /> &nbsp;
                                    <Rating name="read-only" value={5} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={statusVot4} value={4} onClick={() => { setRating(4); setStatusVot1(false); setStatusVot2(false); setStatusVot3(false); setStatusVot4(!statusVot4); setStatusVot5(false) }} /> &nbsp;
                                    <Rating name="read-only" value={4} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={statusVot3} value={3} onClick={() => { setRating(3); setStatusVot1(false); setStatusVot2(false); setStatusVot3(!statusVot3); setStatusVot4(false); setStatusVot5(false) }} /> &nbsp;
                                    <Rating name="read-only" value={3} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={statusVot2} value={2} onClick={() => { setRating(2); setStatusVot1(false); setStatusVot2(!statusVot2); setStatusVot3(false); setStatusVot4(false); setStatusVot5(false) }} /> &nbsp;
                                    <Rating name="read-only" value={2} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={statusVot1} value={1} onClick={() => { setRating(1); setStatusVot1(!statusVot1); setStatusVot2(false); setStatusVot3(false); setStatusVot4(false); setStatusVot5(false) }} /> &nbsp;
                                    <Rating name="read-only" value={1} readOnly />
                                </Container>

                            </Container>
                            <Row >
                                <Button color="info" className="btn btn-block" onClick={onBtnLoc}>Lọc</Button>
                            </Row>
                        </Col>

                        <Col Container xs="9" className="grid-container" >
                            {product.data ?
                                product.data.map((productItem, index) => {
                                    return (

                                        <Card onClick={() => productDetail(productItem._id)} key={index} className="grid-item" style={{
                                            width: '20rem',
                                            margin: "10px",
                                            height: '30rem'
                                        }}>
                                            <img alt="product" src={productItem.imageUrl}></img>
                                            <Container className="mt-3">
                                                <p className="text-center">{productItem.name}</p>
                                                <p className="text-center "><span className="m-2 " style={{ textDecorationLine: "line-through" }}>400</span> <b>{productItem.buyPrice}</b></p>
                                            </Container>
                                        </Card>

                                    )
                                }) : <Spinner color="warning" style={{ marginLeft: "400px" }}></Spinner>}
                        </Col>
                        <Stack direction="row" justifyContent="flex-end" p="30px" pr="70px" mt="50px">
                            <Pagination count={noPage} defaultPage={currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
                        </Stack>

                    </Row>
            }

        </>
    )
}
export default ProductList;