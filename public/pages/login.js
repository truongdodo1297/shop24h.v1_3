import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import auth from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusLogin, login } from "../actions/action"
import { Button, FormGroup, Input, Label } from "reactstrap";

const provider = new GoogleAuthProvider();
function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    const {loginSuccess, isAdmin } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(()=>{
       let isLoggedIn =  localStorage.getItem("isLoggedIn");
       if(isLoggedIn == "true"){
        navigate("/cart")
       }
        console.log(isLoggedIn)
        if( loginSuccess){
            localStorage.setItem("isLoggedIn", true);
            navigate("/cart")
        }
        // if(isAdmin){
        //     navigate("/login")
        // }
    },[loginSuccess])
    const onlogin = () => {
        dispatch(login(userName, passWord))
    }
    const onBtnSign = (e) => {
        navigate("/sign")
    }
    const changeUserName = (e) => {
        setUserName(e.target.value)
    }
    const changePassWord = (e) => {
        setPassWord(e.target.value)
    }
    const [user, setUser] = useState(null)
    const logInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                setUser(result.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            {user ? navigate("/product") :
                <div className="loginDiv">
                    <div className="d-flex justify-content-center h-100" >
                        <div className="card1">
                            <div className="card-header ">
                                <h2 className="signH2">Đăng nhập</h2>
                                <div className="d-flex justify-content-end social_icon">
                                    <span onClick={()=>logInWithGoogle()}><i className="fab fa-google-plus-square"></i></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user fa-2x" ></i></span>
                                        </div>
                                        <Input type="text" className="form-control inputInfo" placeholder="username" onChange={changeUserName}></Input>
                                    </div>
                                    <div className="input-group form-group mt-2">
                                        <div className="input-group-prepend" >
                                            <span className="input-group-text"><i className="fas fa-key fa-2x"></i></span>
                                        </div>
                                        <Input type="password" className="form-control" placeholder="password" onChange={changePassWord}></Input>
                                    </div>
                                    <div className="row align-items-center remember ml-3 p-3 mt-1">
                                        {/* <FormGroup check>
                                            <Input name="check" type="checkbox" />
                                            <Label check for="exampleCheck">
                                                Lưu tài khoản
                                            </Label>
                                        </FormGroup> */}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" value="Login" className="btn btn-lg login_btn" onClick={onlogin}>Đăng nhập</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer pt-0 h-50 mt-2">
                                <div className="d-flex justify-content-center links">
                                   <a onClick={onBtnSign}>Đắng kí tài khoản</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
        // <>
        //     {statusLogin ?
        //         <>
        //             <input onChange={changeUserName}></input>
        //             <input onChange={changePassWord}></input>
        //             <button onClick={onlogin}>click</button>
        //         </>
        //         : ""}
        // </>
    );
}

export default App;
