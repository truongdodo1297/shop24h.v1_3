
import { Rating } from "@mui/material";
import { Container, Row, Col } from "reactstrap";


const ProductList = () => {
    // trong nay nay cai id xuong, roi su dung id goi api lay du lieu do vao component
    // const { pageid } = useParams();
return(

    <>
    <Container>
        <Row >
            <Col xs= "4" style={ {padding: "30px"}}>
            <Row >
                <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/17/638042775473792571_HASP-TAI-NGHE-NHET-TAI-TYPEC-DEVIA-EM048-TRANG-AVT.jpg"></img>
            </Row>
            <Row></Row>
            </Col>
            <Col >
                <h1>Tai phone  DEVIA A4</h1>
                <p style={{fontSize: "medium"}}>Brand: </p>
                <p>Rating:   <Rating name="read-only" value={5} readOnly /></p>
                <p>mô tả: </p>
                <h3 style={{color: "red"}}>$123</h3>
            </Col>
        </Row>
    </Container>
    </>
)
}

export default ProductList;