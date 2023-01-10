import { Row, Col, ButtonGroup, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiItemInShopping } from "../actions/action";
const ProductCard = () => {

    console.log("Trang giỏ hàng");
    const dispatch = useDispatch();
    const { soLuongSanPham, dataShopping } = useSelector((reduxData) => reduxData.shopReducer);

    console.log(dataShopping)

    useEffect(() => {
        // if (soLuongSanPham !== null) {
        //     soLuongSanPham.map((product, index) => {
        //         dispatch(ApiItemInShopping(product.id))
        //     })
        // }

    }, [])
    return (
        <>
            {dataShopping ? dataShopping.map((el, index) => {
                return (
                    <Row className="mt-3">
                        <Col xs="4" className="d-flex text-center bg-light">
                            <Row style={{ width: "180px" }}>
                                <img src={el.data.imageUrl}></img>
                            </Row>
                            <Row className="text-center pt-5">
                                <h4>{el.data.name}</h4>
                            </Row>
                        </Col>
                        <Col xs="3" className="price text-center pt-5">
                            <h4>{el.data.buyPrice}</h4>
                        </Col>
                        <Col xs="2" className="quantity text-center pt-5" >
                            <ButtonGroup
                                className="my-2"
                                size="sm"
                            >
                                <Button outline>
                                    +
                                </Button>
                                <Button outline>
                                    {soLuongSanPham.soLuong}
                                </Button>
                                <Button outline>
                                    -
                                </Button>
                            </ButtonGroup>
                        </Col>
                        <Col className="total text-center pt-5">
                            <h4>Total</h4>
                        </Col>
                        <hr></hr>
                    </Row>

                )
            })



                : <h3>Data Emty !!</h3>}

        </>
    )
}



export default ProductCard;