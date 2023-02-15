import { Navbar, Col, NavItem, NavLink, Nav, Row, Container, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSoLuongItem, changeStatusLogin } from "../actions/action"

const Header = () => {
    const { numberItem, loginSuccess } = useSelector((reduxData) => reduxData.shopReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [displayCollapse, setDisplayCollapse] = useState(false)
    useEffect(() => {
        if (loginSuccess) {
            localStorage.setItem("isLoggedIn", true);
            //  navigate("/cart")
        }
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn == "true") {
            dispatch(changeStatusLogin(true))
        }
        let array = JSON.parse(localStorage.getItem("item") || 0)
        if (array !== 0) {
            let number = array.reduce((total, item) => total + item.quantity, 0);
            dispatch(getSoLuongItem(number))
        }
        else {
            dispatch(getSoLuongItem(array))
        }
    }, []);
    const logOut = () => {
        console.log("??")
        localStorage.setItem("isLoggedIn", false)
        dispatch(changeStatusLogin(false))
    }
    const goHome = () => {
        navigate("/")
    }
    const logIn = () => {
        navigate("/login")
    }
    const goToShop = () => {
        navigate("/cart");
    }


    return (

        //     <Navbar
        //         className="my-2"
        //         color="light"
        //     >
        //         <Col xs="8">
        //             <h1>
        //                 Devcamp
        //             </h1>
        //         </Col>
        //         <Col xs="4" className="p-1 text-center">
        //             <Row>
        //                 <Col>
        //                     <FacebookIcon className="  FacebookIcon"></FacebookIcon>
        //                     <p>Facebook</p>
        //                 </Col>
        //                 <Col>
        //                     <InstagramIcon className="InstagramIcon"></InstagramIcon>
        //                     <p>Instagram</p>
        //                 </Col>
        //                 <Col>
        //                     <YouTubeIcon className=" YouTubeIcon"></YouTubeIcon>
        //                     <p>YouTube</p>
        //                 </Col>
        //                 <Col>
        //                     <TwitterIcon className="TwitterIcon" ></TwitterIcon>
        //                     <p>Twitter</p>
        //                 </Col>

        //             </Row>

        //         </Col>
        //     </Navbar>
        <>
            <Nav xs="12" md = "12" className="navLg">
                {/* <NavItem>
                    <AppleIcon className="AppleIcon" onClick={goHome}></AppleIcon>
                </NavItem> */}
                <NavItem>
                    <NavLink className=" navItem" href="/components/">Mac</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem" href="/components/">iPad</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem" href="/components/">iPhone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem" href="/components/">Watch</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem " href="/components/">AirPods</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem " href="/components/">HeadPhone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem " href="/components/">TV & Home</NavLink>
                </NavItem>
                {loginSuccess ?
                    <NavItem>
                        <NavLink className=" navItem " onClick={logOut}>LogOut</NavLink>
                    </NavItem>
                    :
                    <NavItem>
                        <NavLink className=" navItem " onClick={logIn}>Login</NavLink>
                    </NavItem>
                }
                <NavItem className="ShoppingCartCheckoutIcon" xs="2">
                    <ShoppingCartCheckoutIcon onClick={() => goToShop()}></ShoppingCartCheckoutIcon>
                    <div className="icoShopping"><p>{numberItem}</p></div>
                </NavItem>


                {/* <Col className="SignInHeader bg-danger" >
    <AccountBoxIcon  className="AccountBoxIcon" onClick={()=>signIn()}></AccountBoxIcon>
    <NavLink className="text-left bg-primary" >Sign in</NavLink>
</Col> */}

            </Nav>

            <Navbar className="navbarSm" light>
                <NavbarToggler onClick={() => setDisplayCollapse(!displayCollapse)} />
                <NavbarBrand onClick={goHome} className="text-light">
                    <AppleIcon onClick={goHome}></AppleIcon>
                </NavbarBrand>
                <NavItem className="NavItem_con" >
                    <ShoppingCartCheckoutIcon style={{ filter: "brightness(0) saturate(100%) invert(100%)" }} onClick={() => goToShop()}></ShoppingCartCheckoutIcon>
                    <div className="icoShopping"><p>{numberItem}</p></div>
                </NavItem>

                <Collapse navbar isOpen={displayCollapse} className=" bg-primary text-light">
                    <Nav navbar className="Navbar_sm_Nav">
                        <NavItem>
                            <NavLink className=" navItem m-1  " href="/components/">Mac</NavLink>
                            <hr></hr>
                        </NavItem>
                        <NavItem>
                            <NavLink className=" navItem m-1 " href="/components/">iPad</NavLink>
                            <hr></hr>
                        </NavItem>
                        <NavItem>
                            <NavLink className=" navItem m-1 ml-5" href="/components/">iPhone</NavLink>
                            <hr></hr>
                        </NavItem>
                        <NavItem>
                            <NavLink className=" navItem m-1 ml-5" href="/components/">Watch</NavLink>
                            <hr></hr>
                        </NavItem>
                        <NavItem>
                            <NavLink className=" navItem m-1 ml-5" href="/components/">AirPods</NavLink>
                            <hr></hr>
                        </NavItem>
                        <NavItem>
                            <NavLink className=" navItem m-1 ml-5" href="/components/">HeadPhone</NavLink>
                            <hr></hr>
                        </NavItem>
                        <NavItem>
                            <NavLink className=" navItem m-1 ml-5" href="/components/">TV & Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </>
    )
}
export default Header;