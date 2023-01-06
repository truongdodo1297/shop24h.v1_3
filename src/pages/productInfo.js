
import { Rating } from "@mui/material";
import { Container, Row, Col, Button } from "reactstrap";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiAddCard, changeSoLuong, soLuongProduct } from "../actions/action";


const ProductInfo = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { dataAddCard, soLuongItem } = useSelector((reduxData) => reduxData.shopReducer);

    useEffect(() => {
        dispatch(apiAddCard(productId))
    }
        , [])
    const goToShop = () => {
        navigate("/card");
    }
    // const [number, setNumber] = useState(localStorage.getItem("number") || 0);
    const [numberItem, setNumberItem] = useState(0);

    const onBtnAddToCard = () => {
        // localStorage.setItem("number", number + 1);
        // setNumber( parseInt(number)  + 1);
        setNumberItem(numberItem + 1);
        const soLuong = numberItem + 1;
        const id = dataAddCard.data._id;
        dispatch(changeSoLuong(soLuong, id)); 
        dispatch(soLuongProduct());  // thêm số lượng khi click
    }

    return (

        <>
            <Container>
                <Container style={{marginTop: "30px",  textAlign: "end"}} onClick={() => goToShop()}>
                    <ShoppingCartCheckoutIcon style={{marginTop: "30px",  textAlign: "end"}} onClick={() => goToShop()}></ShoppingCartCheckoutIcon><div className="icoShopping"><p >{soLuongItem}</p></div>
                </Container>

                {dataAddCard ? <Row >
                    <Col xs="4" style={{ padding: "30px" }}>
                        <Row >
                            <img src={dataAddCard.data.imageUrl} alt="anh"></img>
                        </Row>
                        <Row></Row>
                    </Col>
                    <Col >
                        <h1>{dataAddCard.data.name}</h1>
                        <p style={{ fontSize: "medium" }}>Brand: {dataAddCard.data.brand} </p>
                        <p>Rating:   <Rating name="read-only" value={dataAddCard.data.rating} readOnly /></p>
                        <p>mô tả: {dataAddCard.data.description} </p>
                        <h3 style={{ color: "red" }}>${dataAddCard.data.buyPrice}</h3>
                        <Button onClick={() => onBtnAddToCard()}>Add to card</Button>
                    </Col>
                </Row> : <h3 className="text-center ">No data here !!</h3>}
            </Container>
        </>
    )

}

export default ProductInfo;