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
    const [userName, setUserName] = useState()
    const [passWord, setPassWord] = useState()
    const { statusLogin, messageLogin } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(()=>{
        if(messageLogin == "123"){
            dispatch(changeStatusLogin())
        }
    },[])
    const onlogin = () => {
        dispatch(login(userName, passWord))
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
        // <>
        //     {user ? navigate("/product") :
        //         <div className="containerSigin">
        //             <div className="d-flex justify-content-center h-100" >
        //                 <div className="card1">
        //                     <div className="card-header ">
        //                         <h3>Sign In</h3>
        //                         <div className="d-flex justify-content-end social_icon">
        //                             {/* <span><i className="fab fa-facebook-square"></i></span> */}
        //                             <span onClick={()=>logInWithGoogle()}><i className="fab fa-google-plus-square"></i></span>
        //                             {/* <span><i className="fab fa-twitter-square"></i></span> */}
        //                         </div>
        //                     </div>
        //                     <div className="card-body">
        //                         <form>
        //                             <h3>{messageLogin}</h3>
        //                             <div className="input-group form-group mt-3 ">
        //                                 <div className="input-group-prepend">
        //                                     <span className="input-group-text"><i className="fas fa-user fa-2x" ></i></span>
        //                                 </div>
        //                                 <Input type="text" className="form-control inputInfo" placeholder="username" onChange={changeUserName}></Input>

        //                             </div>
        //                             <div className="input-group form-group mt-2">
        //                                 <div className="input-group-prepend" >
        //                                     <span className="input-group-text"><i className="fas fa-key fa-2x"></i></span>
        //                                 </div>
        //                                 <Input type="" className="form-control" placeholder="password" onChange={changePassWord}></Input>
        //                             </div>
        //                             <div className="row align-items-center remember ml-3 p-3 mt-3">
        //                                 <FormGroup check>
        //                                     <Input
        //                                         name="check"
        //                                         type="checkbox"
        //                                     />
        //                                     <Label
        //                                         check
        //                                         for="exampleCheck"
        //                                     >
        //                                         Check me out
        //                                     </Label>
        //                                 </FormGroup>
        //                             </div>
        //                             <div className="form-group">
        //                                 <button type="" value="Login" className="btn btn-lg login_btn" onClick={onlogin}>Login</button>
        //                             </div>
        //                         </form>
        //                     </div>
        //                     <div className="card-footer pt-0 h-50">
        //                         <div className="d-flex justify-content-center links">
        //                             Don't have an account?<a href="#">Sign Up</a>
        //                         </div>
        //                         <div className="d-flex justify-content-center">
        //                             <a href="#">Forgot your password?</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     }
        // </>
        <>
            {statusLogin ?
                <>
                    <input onChange={changeUserName}></input>
                    <input onChange={changePassWord}></input>
                    <button onClick={onlogin}>click</button>
                </>
                : ""}
        </>
    );
}

export default App;
