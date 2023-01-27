import { Navbar, Col, NavItem, NavLink, Nav, Row } from "reactstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import Icon from '../pages/icon';
const Header = () => {
    const navigate = useNavigate()
    const signIn = () =>{
        navigate("/Login")
    }
    const goHome = () =>{
        navigate("/")
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
            <Nav  >

                <NavItem>
                   <AppleIcon className="AppleIcon" onClick = {goHome}></AppleIcon>
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
               
                {/* <Col className="SignInHeader bg-danger" >
                    <AccountBoxIcon  className="AccountBoxIcon" onClick={()=>signIn()}></AccountBoxIcon>
                    <NavLink className="text-left bg-primary" >Sign in</NavLink>
                </Col> */}
                <div>
                <i class="fa-thin fa-bag-shopping"></i>

                </div>
            </Nav>
        </>
    )
}
export default Header;