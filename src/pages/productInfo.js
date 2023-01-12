
import { Rating } from "@mui/material";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiAddCard, AddUserProductDetail } from "../actions/action";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';


const ProductInfo = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { dataAddCard, soLuongItem } = useSelector((reduxData) => reduxData.shopReducer);

    useEffect(() => {
        dispatch(apiAddCard(productId))
    }
        , [])
    const goToShop = () => {
        navigate("/card");
    }
    const [numberItem, setNumberItem] = useState(0);
    const onBtnAddToCard = () => {
        const soLuong = numberItem;
        const id = productId;
        console.log(id)
        dispatch(AddUserProductDetail(id, soLuong));
    }



    return (

        <>
        
            <Container>
                <Container style={{ marginTop: "30px", textAlign: "end" }} onClick={() => goToShop()}>
                    <ShoppingCartCheckoutIcon style={{ marginTop: "30px", textAlign: "end" }} onClick={() => goToShop()}></ShoppingCartCheckoutIcon><div className="icoShopping"><p >{soLuongItem}</p></div>
                </Container>

                {dataAddCard ?
                    <Container >
                        <Row>
                            <Col xs="5" className="textInfo">
                                <h3 style={{ fontSize: "45px", fontWeight: "630" }}>{dataAddCard.data.name}</h3>
                                <h3 style={{ fontStyle: "italic", marginTop: "30px" }}>${dataAddCard.data.buyPrice}</h3>
                                <h5 style={{ marginTop: "60px" }}>Color</h5>
                                <div className="d-flex mt-4">
                                    <div className="divColor1" /* style={{display: "none"}}*/></div>
                                    <div className="divColor2"></div>
                                </div>
                                <div className="d-flex  mt-5">
                                    <LocalShippingOutlinedIcon style={{ fontSize: "30px" }} />&nbsp;&nbsp;&nbsp;
                                    <h5 className="ml-5 mt-1">Ships:</h5>
                                </div>
                                <p style={{ paddingLeft: "40px", fontSize: "17px" }}>1 business day <br></br> Free Shipping</p>
                                <div className="d-flex  mt-5">
                                    <CasesOutlinedIcon style={{ fontSize: "30px" }} />&nbsp;&nbsp;&nbsp;
                                    <h5 className="ml-5 mt-1">Pickup:</h5>
                                    <h5 className="ml-5 mt-1">Ships:</h5>
                                </div>
                                <a style={{ paddingLeft: "-5px", fontSize: "17px" }}>Check avaliablity</a><br></br>
                                <Button className="btnAddToCard" onClick={() => onBtnAddToCard()}>Add to card</Button>
                            </Col>
                            <Col xs="" style={{ padding: "30px" }} className="imgCard">
                                <img className="imgItemInfo" src={dataAddCard.data.imageUrl} alt="anh"></img>
                            </Col>
                            <div>
                                <hr className="hr1"></hr>
                                <p style={{ padding: "30px", paddingLeft: "200px" }}>Need some help? Contact us.</p>
                            </div>
                        </Row>
                        <hr></hr>
                        <Row className="rowInfoH2">
                            <h2>Product Information</h2>
                        </Row>
                        <Row className="rowInfo">
                            <Col xs="4" className="text-center">
                                <h3>Overview</h3>
                            </Col>
                            <Col xs="8" className="">
                                <p className="rowInfoP">
                                    Magic Trackpad is wireless and rechargeable,
                                    and it includes the full range of Multi-Touch gestures and Force Touch technology. Sensors underneath the trackpad surface detect subtle differences in the amount of pressure you apply, bringing more functionality to your fingertips and enabling a deeper connection to your content. It features a large edge-to-edge glass surface area, making scrolling and swiping through your
                                    favorite content more productive and comfortable than ever.</p>
                            </Col>
                        </Row>
                    </Container>



                    : <h3 className="text-center ">No data here !!</h3>}
            </Container>
        </>
    )

}

export default ProductInfo;