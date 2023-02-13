import { Pagination, Rating } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Spinner, UncontrolledAccordion } from "reactstrap";
import { callAPI, btnLoc, onclickCard, changePagination } from "../actions/action";
import "../App.css";
import { useNavigate } from "react-router-dom";


const ProductList = () => {

    const dispatch = useDispatch();
    const { product, statusPending, totalProduct, limit, currentPage } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        dispatch(callAPI(currentPage, limit))
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
    const [brandJBT, setBrandJBT] = useState(false);
    const [priceTren200, setPriceTren200] = useState(false);
    const [priceDuoi200, setPriceDuoi200] = useState(false);
    const [priceTren1000, setPriceTren1000] = useState(false);
    const noPage = Math.ceil(totalProduct / limit);
    const onChangePagination = (event, value) => {
        dispatch(changePagination(value));
    }
    // onClick={() => { if(statusColorDen === false){setColor("Đen") ; console.log(1)} else{setColor(undefined)}  console.log(color); console.log(statusColorDen);  }}
    const filterColorDen = () => {
        if (!statusColorDen) {
            setColor("Đen")
        }
        else {
            setColor(undefined)
        }
        // bỏ dấu tích
        setStatusColorDen(!statusColorDen);
        //bỏ dấu tích ô trắng 
        setStatusColorTrang(false)
    }
    const filterColorTrang = () => {
        if (!statusColorTrang) {
            setColor("Trắng")
        }
        else {
            setColor(undefined)
        }
        // bỏ dấu tích
        setStatusColorDen(false);
        setStatusColorTrang(!statusColorTrang)
    }
    const filterbrandDEVIA = () => {
        if (!brandDEVIA) {
            setBrand("DEVIA")
        }
        else {
            setBrand(undefined)
        }
        setBrandDEVIA(!brandDEVIA);
        setBrandIPHONE(false);
        setbrandXiaomi(false);
        setBrandJBT(false);
    }
    const filterbrandIPHONE = () => {
        if (!brandIPHONE) {
            setBrand("IPHONE")
        }
        else {
            setBrand(undefined)
        }
        setBrandIPHONE(!brandIPHONE);
        setBrandDEVIA(false);
        setbrandXiaomi(false);
        setBrandJBT(false);
    }
    const filterbrandXIAOMI = () => {
        if (!brandXiaomi) {
            setBrand("XIAOMI")
        }
        else {
            setBrand(undefined)
        }
        setbrandXiaomi(!brandXiaomi);
        setBrandIPHONE(false);
        setBrandDEVIA(false);
        setBrandJBT(false);

    }
    const filterbrandJBT = () => {
        if (!brandJBT) {
            setBrand("JBT")
        }
        else {
            setBrand(undefined)
        }
        setBrandJBT(!brandJBT);
        setBrandIPHONE(false);
        setBrandDEVIA(false);
        setbrandXiaomi(false);

    }
    return (
        <>
            {
                statusPending ?
                    <Row style={{ height: "500px" }} >
                        <Spinner color="warning" style={{ marginLeft: "700px", marginTop: "200px", padding: "30px" }}></Spinner>
                    </Row>
                    :
                    <Row >
                        <Col md="3" className="listFilter">

                            <Container className="mt-3">
                                <h4>Brands</h4>
                                <Container>
                                    <Input type="checkbox" checked={brandDEVIA} value={"DEVIA"} onChange={() => filterbrandDEVIA()} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>DEVIA</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={brandIPHONE} value={"IPHONE"} onChange={() => filterbrandIPHONE()} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>IPHONE</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={brandXiaomi} value={"XIAOMI"} onChange={() => filterbrandXIAOMI()} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>XIAOMI</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={brandJBT} value={"JBT"} onChange={() => filterbrandJBT()} ></Input>&nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBT</Label>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Color</h4>
                                <Container>
                                    <Input type="checkbox" checked={statusColorTrang} value={"Trắng"} onChange={() => { filterColorTrang() }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trắng</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={statusColorDen} value={"Đen"} onClick={() => { filterColorDen() }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Đen</Label>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Price</h4>
                                <Container className="pt-3">
                                    <Input type="checkbox" checked={priceTren200} onClick={() => { setPrice(201); setPriceTren200(!priceTren200); setPriceTren1000(false); setPriceDuoi200(false) }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trên 200 </Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" checked={priceDuoi200} onClick={() => { setPrice(199); setPriceTren200(false); setPriceTren1000(false); setPriceDuoi200(!priceDuoi200) }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Dưới 200</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" checked={priceTren1000} onClick={() => { setPrice(1001); setPriceTren200(false); setPriceTren1000(!priceTren1000); setPriceDuoi200(false) }} /> &nbsp;
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

                        <Col>
                            <UncontrolledAccordion className="listAccordion" stayOpen >
                                <AccordionItem>
                                    <AccordionHeader targetId="1">
                                        Tìm kiếm sản phẩm
                                    </AccordionHeader>

                                    <AccordionBody accordionId="1">
                                        <Col md="3">

                                            <Container className="mt-3">
                                                <h4>Thương hiệu</h4>
                                                <hr></hr>
                                                <Container>
                                                    <Input type="checkbox" checked={brandDEVIA} value={"DEVIA"} onChange={() => filterbrandDEVIA()} ></Input>&nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>DEVIA</Label>
                                                </Container>
                                                <Container>
                                                    <Input type="checkbox" checked={brandIPHONE} value={"IPHONE"} onChange={() => filterbrandIPHONE()} ></Input>&nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>IPHONE</Label>
                                                </Container>
                                                <Container>
                                                    <Input type="checkbox" checked={brandXiaomi} value={"XIAOMI"} onChange={() => filterbrandXIAOMI()} ></Input>&nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>XIAOMI</Label>
                                                </Container>
                                                <Container>
                                                    <Input type="checkbox" checked={brandJBT} value={"JBT"} onChange={() => filterbrandJBT()} ></Input>&nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBT</Label>
                                                </Container>
                                            </Container>
                                            <Container className="mt-3">
                                                <h4>Màu sắc</h4>
                                                <hr></hr>
                                                <Container>
                                                    <Input type="checkbox" checked={statusColorTrang} value={"Trắng"} onChange={() => { filterColorTrang() }} /> &nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trắng</Label>
                                                </Container>
                                                <Container>
                                                    <Input type="checkbox" checked={statusColorDen} value={"Đen"} onClick={() => { filterColorDen() }} /> &nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Đen</Label>
                                                </Container>
                                            </Container>
                                            <Container className="mt-3">
                                                <h4>Giá</h4>
                                                <hr></hr>
                                                <Container >
                                                    <Input type="checkbox" checked={priceTren200} onClick={() => { setPrice(201); setPriceTren200(!priceTren200); setPriceTren1000(false); setPriceDuoi200(false) }} /> &nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trên 200 </Label>
                                                </Container>
                                                <Container>
                                                    <Input type="checkbox" checked={priceDuoi200} onClick={() => { setPrice(199); setPriceTren200(false); setPriceTren1000(false); setPriceDuoi200(!priceDuoi200) }} /> &nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Dưới 200</Label>
                                                </Container>   <Container>
                                                    <Input type="checkbox" checked={priceTren1000} onClick={() => { setPrice(1001); setPriceTren200(false); setPriceTren1000(!priceTren1000); setPriceDuoi200(false) }} /> &nbsp;
                                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trên 1000</Label>
                                                </Container>
                                            </Container>
                                            <Container className="mt-3">
                                                <h4>Đánh giá</h4>
                                                <hr></hr>
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
                                            <Row className="btnLoc" >
                                                <Button color="info" className="btn btn-block" onClick={onBtnLoc}>Lọc</Button>
                                            </Row>

                                        </Col>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </Col>
                        <Col Container md="9" xs="12" className="listGrid" >
                            {product.data ?
                                product.data.map((productItem, index) => {
                                    return (

                                        <Card onClick={() => productDetail(productItem._id)} key={index} className="listGridItem">
                                            <img className="listImg" alt="product" src={productItem.imageUrl}></img>
                                            <CardBody >
                                                <p className="listType">{productItem.type}</p>
                                                <p className="listProductName">{productItem.name}</p>
                                                <p className="listProductPrice"><span className="m-2 " style={{ textDecorationLine: "line-through" }}>{productItem.buyPrice}</span> <b>{productItem.promotionPrice}</b></p>
                                                <Col className="listRating">
                                                    <Rating name="read-only" value={productItem.rating} readOnly />
                                                </Col>
                                            </CardBody>
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