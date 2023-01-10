
import { Rating } from "@mui/material";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiAddCard, changeSoLuong, soLuongProduct, ApiItemInShopping,addNewProduct } from "../actions/action";


const ProductInfo = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { dataAddCard, soLuongItem, soLuongSanPham } = useSelector((reduxData) => reduxData.shopReducer);

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
        // debugger;
    //     if(soLuongSanPham == ""){ // nếu mảng chứa số lượng sản phâm rỗng thì thây đỗi 
    //         setNumberItem(numberItem + 1);
    //         dispatch(soLuongProduct());
    //         const soLuong = numberItem + 1;
    //         const id = dataAddCard.data._id;
    //         dispatch(changeSoLuong(soLuong, id)); 
    //         dispatch(ApiItemInShopping(id));
    //     }
    //     else {
    //         const id = dataAddCard.data._id;
    //         soLuongSanPham.map((el,index)=>{
    //             if(el.id == id){
    //                 // console.log("yes");
    //                 setNumberItem(numberItem + 1);
    //                 const soLuong = numberItem + 1;
    //                 const id = dataAddCard.data._id;
    //                 dispatch(changeSoLuong(soLuong, id)); 
    //             }
    //            else{
    //                 console.log("else");
    //                 console.log(soLuongSanPham);

    //             setNumberItem(numberItem + 1);
    //             dispatch(soLuongProduct());
    //             const soLuong = numberItem + 1;
    //             const id = dataAddCard.data._id;
    //             dispatch(addNewProduct(soLuong, id)); 
    //             dispatch(ApiItemInShopping(id));
    //            }
    //         })
    //     }

         dispatch(ApiItemInShopping(dataAddCard.data._id));
    }

    return (

        <>
            <Container>
                <Container style={{ marginTop: "30px", textAlign: "end" }} onClick={() => goToShop()}>
                    <ShoppingCartCheckoutIcon style={{ marginTop: "30px", textAlign: "end" }} onClick={() => goToShop()}></ShoppingCartCheckoutIcon><div className="icoShopping"><p >{soLuongItem}</p></div>
                </Container>

                {dataAddCard ? <Row >
                    <Col xs="4" style={{ padding: "30px" }}>
                        <Row >
                            <img src={dataAddCard.data.imageUrl} alt="anh"></img>
                        </Row>
                        <Row></Row>
                    </Col>
                    <Col>
                        <h3>{dataAddCard.data.name}</h3>
                        <span style={{ fontSize: "20px",paddingTop: "40px" }}>Brand: {dataAddCard.data.brand} </span><br></br>
                        <span style={{ fontSize: "20px" }} >Rating:   <Rating name="read-only" value={dataAddCard.data.rating} readOnly /></span><br></br>
                        <span style={{ fontSize: "20px" }}>mô tả: {dataAddCard.data.description} </span>
                        <h3 style={{ color: "red" }}>${dataAddCard.data.buyPrice}</h3>
                        <ButtonGroup
                                className="my-2"
                                size="sm"
                            >
                                <Button outline>
                                    +
                                </Button>
                                <Button outline>
                                  
                                </Button>
                                <Button outline>
                                    -
                                </Button>
                            </ButtonGroup><br></br>
                        <Button onClick={() => onBtnAddToCard()}>Add to card</Button>
                    </Col>
                </Row> : <h3 className="text-center ">No data here !!</h3>}
            </Container>
        </>
    )

}

export default ProductInfo;