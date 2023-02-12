import { Col, Row } from "reactstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <Row xs = "12" className="footer">
                <Col xs="4">
                    <h5>PRODUCT</h5>
                    <p>Help Center</p>
                    <p>Product Help</p>
                    <p>Warranty</p>
                    <p>Order Status</p>
                </Col>
                <Col xs="4" pl="4">
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
                <Col xs = "12">
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