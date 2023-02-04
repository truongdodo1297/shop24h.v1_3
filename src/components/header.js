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
import { getSoLuongItem } from "../actions/action"

const Header = () => {
    const { soLuongItem } = useSelector((reduxData) => reduxData.shopReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [displayCollapse, setDisplayCollapse] =  useState(false)
    const signIn = () => {
        navigate("/Login")
    }
    const goHome = () => {
        navigate("/")
    }
    const goToShop = () => {
        navigate("/cart");
    }
    useEffect(() => {
        dispatch(getSoLuongItem(parseInt(localStorage.getItem("index")) || 0))
    }, []);

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
            <Nav className="Nav_lg">
                <NavItem>
                    <AppleIcon className="AppleIcon" onClick={goHome}></AppleIcon>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem m-1 ml-4" href="/components/">Mac</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem m-1 ml-1" href="/components/">iPad</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem m-1 ml-5" href="/components/">iPhone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem m-1 ml-5" href="/components/">Watch</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem m-1 ml-5" href="/components/">AirPods</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem m-1 ml-5" href="/components/">HeadPhone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className=" navItem m-1 ml-5" href="/components/">TV & Home</NavLink>
                </NavItem>
                <Col className="ShoppingCartCheckoutIcon" xs="3">
                    <ShoppingCartCheckoutIcon onClick={() => goToShop()}></ShoppingCartCheckoutIcon>
                    <div className="icoShopping"><p>{soLuongItem}</p></div>
                </Col>


                {/* <Col className="SignInHeader bg-danger" >
    <AccountBoxIcon  className="AccountBoxIcon" onClick={()=>signIn()}></AccountBoxIcon>
    <NavLink className="text-left bg-primary" >Sign in</NavLink>
</Col> */}

            </Nav>

            <Navbar className="Navbar_sm" light>
                <NavbarToggler onClick = {()=>setDisplayCollapse(!displayCollapse)}  />
                <NavbarBrand onClick={goHome} className = "text-light">
                <AppleIcon  onClick={goHome}></AppleIcon>
                </NavbarBrand>
                <NavItem className="NavItem_con" >
                    <ShoppingCartCheckoutIcon onClick={() => goToShop()}></ShoppingCartCheckoutIcon>
                    <div className="icoShopping"><p>{soLuongItem}</p></div>
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