import { Row, Col, ButtonGroup, Button, Container } from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPIAddUserProductDetail, ApiItemInShopping } from "../actions/action";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const ProductCard = () => {

    console.log("Trang giỏ hàng");
    const { soLuongSanPham, dataShopping } = useSelector((reduxData) => reduxData.shopReducer);
    const dispatch = useDispatch();
    useEffect(() => {

            dispatch(callAPIAddUserProductDetail());
            console.log(soLuongSanPham)
        //   { soLuongSanPham.data ?  soLuongSanPham.data.map((el, index) => {
        //         console.log(index)
        //       return  dispatch(ApiItemInShopping(el.product))
        //      : "" ) }
        
        if(soLuongSanPham.data.length !== 0 ){
            for (let i = 0; i < soLuongSanPham.data.length;i++){
                soLuongSanPham.data[i].map((el,index) => {

                    console.log(el.product)
                    console.log("???")
    
                    return  dispatch(ApiItemInShopping(el.product))
                }) 
            }
           

        }
        else{ 
            console.log("dsafdsafa")
            return ""
        }

    }
        , [])
    console.log(dataShopping.data)
    return (
        <>
            <Row className="shopHead">
                <h2 className="shopHeadH2">Your bag total is $208.00.</h2>
                <p className="rowInfoP">Free delivery and free returns.</p>
                <Container>
                    <Button className="btnAddToCard" >Check Out</Button>
                </Container>
            </Row>

            <Row className="shopItem">
                <hr className="shopHr"></hr>
                <Col xs="4" className="shopImg">
                    <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/23/637732744056652714_avt.jpg"></img>
                </Col>
                <Col xs="8" className="shopInfo">

                    <Row className="shopDiv" >
                        <Col xs="5">
                            <h2 className="shopH2">
                                Magic Trackpad - Black Multi-Touch Surface</h2>
                        </Col>
                        <Col className="mt-3">
                            <Button className="shopButton"> 1</Button>
                        </Col>
                        <Col className="shopPrice">
                            <h2>$149.00</h2>
                            <p className="shopP">Remove</p>
                        </Col>
                        <hr className="shopHr2"></hr>
                    </Row>
                  
                    <div className="d-flex pt-3 pb-3">
                        <CardGiftcardIcon></CardGiftcardIcon>
                        <p className="shopPriceP">Add a gift message</p>
                        <Col className="shopP">  <p  >Add</p> </Col>
                    </div>
                    <Row>
                        <hr className="shopHr2"></hr>
                        <Col xs="7" >
                            <p className="shopPriceP ">Find out how soon you can get this item</p>
                            <LocalMallIcon></LocalMallIcon>
                            <span style={{ marginLeft: "10px", marginTop: "95px" }}>In stock and ready to ship.</span>
                        </Col>
                        <Col>
                            <p className="shopPriceP" href="/">Enter zip code</p>
                        </Col>

                    </Row>

                </Col>
                
                <Row className="shopTotal">
                <hr></hr>
                    <Col xs = "4"></Col>
                    <Col xs= "8">
                        <Row>
                            <Col>
                            <p className="rowInfoP">shopTotal</p>
                            <p className="rowInfoP">Shipping</p>
                            </Col>
                            <Col style={{textAlign: "end"}}>
                            <p className="rowInfoP">$208.00</p>
                            <p className="rowInfoP">FREE</p>
                            </Col>
                        <hr></hr>
                        </Row>
                    </Col>

                    <Row>
                    <Col xs = "4"></Col>
                    <Col xs= "8">
                        <Row>
                            <Col>
                            <h2>Total</h2>
                            </Col>
                            <Col style={{textAlign: "end"}}>
                            <h2>$208.00</h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Row>
            </Row>
        </>
    )
}




export default ProductCard;