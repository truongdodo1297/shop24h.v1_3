import { Col, Row } from "reactstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <Row className="d-flex text-center p-3 pt-5 " style={{ float: "end", backgroundColor: "#ced4da", display: "inline" }}>
                <Col xs="3">
                    <h5>PRODUCT</h5>
                    <p>Help Center</p>
                    <p>Product Help</p>
                    <p>Warranty</p>
                    <p>Order Status</p>
                </Col>
                <Col xs="3" pl="4">
                    <h5>SERVICES</h5>
                    <p>Help Center</p>
                    <p>Product Help</p>
                    <p>Warranty</p>
                    <p>Order Status</p>
                </Col>
                <Col xs="4">
                    <h5>SUPPORT</h5>
                    <p>Help Center</p>
                    <p>Product Help</p>
                    <p>Warranty</p>
                    <p>Order Status</p>
                </Col>
                <Col >
                    <h4 >Devcamp</h4>
                    <FacebookIcon className="m-2"></FacebookIcon>
                    <InstagramIcon className="m-2"></InstagramIcon>
                    <YouTubeIcon className="m-2"></YouTubeIcon>
                    <TwitterIcon className="m-2"></TwitterIcon>
                </Col>
            </Row>
        </>
    )
}
export default Footer;