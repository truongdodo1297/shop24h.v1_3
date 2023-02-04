
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import AppleIcon from '@mui/icons-material/Apple';
import { Button, Card, CardFooter, CardBody, CardTitle, CardText, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { callAPILimit3 } from "../actions/action";


const Home = () => {
    const dispatch = useDispatch();
    const { productIncard } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        dispatch(callAPILimit3())
    }, [])
    const navigate = useNavigate()
    const goToProduct = () => {
        navigate("/Product")
    }
    return (
        <div className="d-block">
           
            <Row className="Nav_Icon" style={{ justifyContent: "center", backgroundColor: " rgb(230, 230, 230)", height: "110px" }} >
                <Col className="iconPhone" xs="2">
                    <PhoneIphoneIcon style={{ fontSize: "55px" }} />
                    <p>iPhone 14 Pro</p>
                </Col>
                <Col className="iconPhone" xs="2">
                    <PhoneAndroidIcon style={{ fontSize: "55px" }} />
                    <p>iPhone 14</p>
                </Col>
                <Col className="iconPhone" xs="2">
                    <SmartphoneIcon style={{ fontSize: "55px" }}></SmartphoneIcon>
                    <p>iPhone 13</p>
                </Col>
                <Col className="iconPhone" xs="2">
                    <AdUnitsIcon style={{ fontSize: "55px" }}></AdUnitsIcon>
                    <p>iPhone SE</p>
                </Col>
                <Col className="iconPhone" xs="2">
                    <TripOriginIcon style={{ fontSize: "55px" }} ></TripOriginIcon>
                    <p>AirTag</p>
                </Col>
                <Col className="iconPhone" xs="2">
                    <HeadphonesIcon style={{ fontSize: "55px" }} onClick={() => { goToProduct() }}></HeadphonesIcon>
                    <p>HeadPhone</p>
                </Col>
            </Row>

            <Row className="imgBody">
                <p className="New">New</p>
                <p className="iPhoneName">iPhone 14</p>
                <h1>Big and bigger.</h1>
                <Container className="mt-4 m-5" >
                    <Button className="btn btnBuy">Buy</Button>
                    <a>Learn more  </a>
                </Container>
                <Col xs = "12">
                <img src="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/0x0.jpg?format=jpg&crop=2276,1279,x145,y97,safe&width=1200"></img>
                </Col>
            </Row>
            <Row className="imgBody2 text-light">
                <p className="New">New</p>
                <p className="iPhoneName text-light">iPhone 14 Pro</p>
                <h1>Pro. Beyond.</h1>
                <Container className="mt-4 ml-5 text-light" >
                    <Button className="btn btnBuy">Buy</Button>
                    <a>Learn more  </a>
                </Container>
                <img src="https://vcdn1-sohoa.vnecdn.net/2022/09/08/Apple-iPhone-14-Pro-iPhone-14-8382-5558-1662584561.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NTL8BUbSQE4ChgTW8r9D-Q"></img>
            </Row>

            <Row className="imgBody3 text-light ">
                {/* <Col xs="4" md = "4" className="text1 bg-danger">
                    <p className="New">New</p>
                    <p className="iPhoneName text-dark">iPhone SE</p>
                    <h1>Love the power.<br></br>
                        Love the value.</h1>
                    <div className="mt-4  text-light" >
                        <Button className="btn btnBuy">Buy</Button>
                        <a style={{ color: "blue" }}>Learn more  </a>
                    </div>
                </Col> */}
                <Container xs="12" md = "12" className="imgBody3_tilte">
                    <p className="iPhoneName text-dark">WATCH</p>
                    <p className="text-danger">SERIES 8</p>
                    <h3>Love the power Love the value.</h3>
                    <div className="mt-4  text-light" >
                        <Button className="btn btnBuy">Buy</Button>
                        <a style={{ color: "blue" }}>Learn more  </a>
                    </div>
                </Container>
                <Col xs="12" md = "12">
                    <img className="imgBody3_img" src="https://cdn.pixabay.com/photo/2015/11/03/18/41/iphone-1021299_960_720.jpg"></img>
                </Col>
            </Row>

            <Row className="imgBody4 ">
                <Col className="imgHeadPhone" >
                    <h1 className="imgBody4_h1">Magic runs in the family.</h1>
                    <p className="iPhoneName ">Explore all AirPods models and find the best ones for you.</p>
                    <a style={{ color: "blue" }}>Learn more  </a>
                </Col>
                <Row className="imgHeadPhone_xs" xs = "12">
                    <h1 className="imgBody4_h1">Magic runs in the family.</h1>
                    <p className="iPhoneName ">Explore all AirPods models and find the best ones for you.</p>
                    <a style={{ color: "blue" }}>Learn more  </a>
                </Row>
                <img style={{ width: "100%" }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011_FV1_FMT_WHH?wid=940&hei=800&fmt=jpeg&qlt=90&.v=1604776024000"></img>
            </Row>

            <Row className="cardHeadPhone">
                <h2>Which HeadPhone is right for you?</h2>
              
                {
                    productIncard.data ? productIncard.data.map((el, index) => {
                        return (
                            <Card
                                className=" cardItem my-2  m-2"
                                color="primary"
                                outline
                                style={{
                                    width: '18rem',
                                }}
                            >
                                <img className="imgCard"
                                    alt="Card"
                                    src={el.imageUrl}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {el.name}
                                    </CardTitle>
                                    <CardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </CardText>
                                </CardBody>
                                <CardFooter className="CardFooter" onClick={() => { goToProduct() }}>
                                    Show more
                                </CardFooter >
                            </Card>)
                    }) : <h1>Opssss !</h1>
                }
            </Row>
        </div>
    )
}
export default Home;