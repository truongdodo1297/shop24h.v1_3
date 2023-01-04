import { Navbar, Col } from "reactstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () => {
    return (
        <>
            <Navbar
                className="my-2"
                color="light"
            >
                <Col xs="8">
                    <h1>
                        Devcamp
                    </h1>
                </Col>
                <Col xs="4" className="p-2 text-center">
                    <FacebookIcon className="m-3"></FacebookIcon>
                    <InstagramIcon className="m-3"></InstagramIcon>
                    <YouTubeIcon className="m-3"></YouTubeIcon>
                    <TwitterIcon className="m-3" ></TwitterIcon>
                </Col>
            </Navbar>
        </>
    )
}
export default Header;