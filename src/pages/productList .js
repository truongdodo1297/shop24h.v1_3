import { Pagination, Rating } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Input, Label, Row, Spinner } from "reactstrap";
import { callAPI, btnLoc, onclickCard } from "../actions/action";
import "../App.css";
import routerList from "../router";

const ProductList = () => {

    const dispatch = useDispatch();
    const { product, statusPending } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        dispatch(callAPI())
    }, [])

    const [rating, setRating] = useState();
    const [price, setPrice] = useState();
    const [color, setColor] = useState();

    const onBtnLoc = () => {
        // const valueFilter = {
        //     rating: rating,
        //     price: price,
        //     color: color
        // }
        const valueFilter = {
            rating: rating
        }
        console.log();
        dispatch(btnLoc(valueFilter));
    }
    const productDetail = (id) => {

        dispatch(onclickCard(id))
    }
    return (
        <>
            {
                statusPending ?
                    <Spinner color="warning" style={{ marginLeft: "500px" }}></Spinner>
                    :
                    <Row className="d-flex">
                        <Col xs="3" style={{ paddingLeft: "90px" }}>
                            <Container className="mt-3">
                                <h4>Caregories</h4>
                                <Container style={{ display: "block" }}>
                                    <a href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black", paddingTop: "30px" }}>Wireless</a><br></br>
                                    <a href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</a><br></br>
                                    <a href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</a><br></br>
                                    <a href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</a><br></br>
                                    <a href="/" style={{ textDecoration: "none", fontSize: "larger", color: "black" }}>Wireless</a><br></br>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Brands</h4>
                                <Container>
                                    <Input type="checkbox" /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBL</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBL</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBL</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBL</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>JBL</Label>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Color</h4>
                                <Container>
                                    <Input type="checkbox" value={"trang"} onClick={() => { setColor("trang") }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trắng</Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" value={"den"} onClick={() => { setColor("den") }} /> &nbsp;
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
                                    <Input type="checkbox" value={">200"} onClick={() => { setPrice(">200") }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trên 200 </Label>
                                </Container>
                                <Container>
                                    <Input type="checkbox" value={"<200"} onClick={() => { setPrice(">200") }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Dưới 200</Label>
                                </Container>   <Container>
                                    <Input type="checkbox" value={">1000"} onClick={() => { setPrice(">200") }} /> &nbsp;
                                    <Label className="mb-1" style={{ fontSize: "larger" }}>Trên 1000</Label>
                                </Container>
                            </Container>
                            <Container className="mt-3">
                                <h4>Rating</h4>
                                <Container>
                                    <Input type="checkbox" value={5} onClick={() => { setRating(5) }} /> &nbsp;
                                    <Rating name="read-only" value={5} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" value={4} onClick={() => { setRating(4) }} /> &nbsp;
                                    <Rating name="read-only" value={4} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" value={3} onClick={() => { setRating(3) }} /> &nbsp;
                                    <Rating name="read-only" value={3} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" value={2} onClick={() => { setRating(2) }} /> &nbsp;
                                    <Rating name="read-only" value={2} readOnly />
                                </Container>
                                <Container>
                                    <Input type="checkbox" value={1} onClick={() => { setRating(1) }} /> &nbsp;
                                    <Rating name="read-only" value={1} readOnly />
                                </Container>

                            </Container>
                            <Container>
                                <Button color="info" className="btn btn-block" onClick={onBtnLoc}>Lọc</Button>
                            </Container>
                        </Col>

                        <Col Container xs="9" className="grid-container" >
                            {product.data ?
                                product.data.map((productItem, index) => {
                                    return (
                                        <Link key={index} to={productItem._id}>

                                            <Card href={routerList.path} onClick={() => productDetail(productItem._id)} key={index} className="grid-item" style={{
                                                width: '22rem',
                                                margin: "10px",
                                                height: '30rem'
                                            }}>
                                                <img alt="product" src={productItem.imageUrl}></img>
                                                <Container className="mt-3">
                                                    <p className="text-center">{productItem.name}</p>
                                                    <p className="text-center "><span className="m-2 " style={{ textDecorationLine: "line-through" }}>400</span> <b>{productItem.buyPrice}</b></p>
                                                </Container>
                                            </Card>
                                        </Link>
                                    )
                                }) : ""}
                        </Col>
                        <Stack direction="row" justifyContent="flex-end" p="30px" pr="70px" mt="50px">
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Stack>

                    </Row>
            }

        </>
    )
}
export default ProductList;