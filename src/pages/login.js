import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import auth from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import changeStatusLogin from "../actions/action"
import { Button, FormGroup, Input, Label } from "reactstrap";

const provider = new GoogleAuthProvider();
function App() {
    const dispatch = useDispatch();
    const { statusLogin } = useSelector((reduxData) => reduxData.shopReducer);

    const [user, setUser] = useState(null)
    const logInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                setUser(result.user)
                console.log(statusLogin)
                if (statusLogin == false) {
                    // dispatch(changeStatusLogin())
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }
    const navigate = useNavigate();
    return (
        <>
            {user ? navigate("/product") :
                <div className="containerSigin">
                    <div className="d-flex justify-content-center h-100" >
                        <div className="card">
                            <div className="card-header ">
                                <h3>Sign In</h3>
                                <div className="d-flex justify-content-end social_icon">
                                    {/* <span><i className="fab fa-facebook-square"></i></span> */}
                                    <span onClick={()=>logInWithGoogle()}><i className="fab fa-google-plus-square"></i></span>
                                    {/* <span><i className="fab fa-twitter-square"></i></span> */}
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user fa-2x" ></i></span>
                                        </div>
                                        <Input type="text" className="form-control inputInfo" placeholder="username"></Input>

                                    </div>
                                    <div className="input-group form-group mt-2">
                                        <div className="input-group-prepend" >
                                            <span className="input-group-text"><i className="fas fa-key fa-2x"></i></span>
                                        </div>
                                        <Input type="password" className="form-control" placeholder="password"></Input>
                                    </div>
                                    <div className="row align-items-center remember ml-3 p-3 mt-3">
                                        <FormGroup check>
                                            <Input
                                                name="check"
                                                type="checkbox"
                                            />
                                            <Label
                                                check
                                                for="exampleCheck"
                                            >
                                                Check me out
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" value="Login" className="btn btn-lg login_btn">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer pt-0 h-50">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?<a href="#">Sign Up</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default App;
