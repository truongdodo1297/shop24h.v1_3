
import { InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { Button, Container, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
import {signIn} from "../actions/action"
const LoginForm = () => {
    const [signStatus, setSignStatus] = useState("")
    const [passWord, setPassWord] = useState("")
    const navigate = useNavigate()
    const { signSuccess,messageSign } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        if(signSuccess){
            navigate("/login")
        }
    }, [signSuccess])
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        passWord: '',
    });
    const validateInput = () =>{
        if(formData.userName == ""){
            setSignStatus("Tên tài khoản không được bỏ trống")
            return;
        }
        if(formData.userName.length < 6){
            setSignStatus("Tên tài khoản phải lớn hơn 6")
            return;
        }
        if(formData.email == ""){
            setSignStatus("Email không được bỏ trống")
            return;
        }
        if(formData.phone == ""){
            setSignStatus("Số điện thoại không được bỏ trống")
            return;
        }
        if(formData.phone.length < 10){
            setSignStatus("Số điện thoại phải lớn hơn 10 số")
            return;
        }
        if(formData.phone.length < 10){
            setSignStatus("Số điện thoại phải lớn hơn 10 số")
            return;
        }
        if(formData.passWord !==  passWord){
            setSignStatus("Pass word không đúng")
            return;
        }
    }
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };
    const handlePassWordChange = (e) =>{
        setPassWord(e.target.value)
    }

    const handleSubmit = () => {
        debugger;
        console.log(formData)
        validateInput()
        dispatch(signIn(formData))
    };

    return (
        <div className='SignDiv'>
            <form className="SignForm">
                <h3>{signStatus}</h3>
                <h2 className='signH2'>Đăng kí tài khoản</h2>
                <FormGroup className="position-relative">
                    <InputLabel className='text-light'>Tên đăng nhập</InputLabel>
                    <Input
                        className='signInput'
                        id="name"
                        name="userName"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {/* <FormFeedback tooltip >
                    Oh noes! that name is already taken
                </FormFeedback> */}
                </FormGroup>
                <div>
                    <InputLabel className='text-light'>Email:</InputLabel>
                    <Input
                        className='signInput'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <InputLabel className='text-light'>Số điện thoại:</InputLabel>
                    <Input
                        className='signInput'
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <InputLabel className='text-light'>Mật khẩu:</InputLabel>
                    <Input
                        className='signInput'
                        type="password"
                        id="password"
                        name="passWord"
                        value={formData.passWord}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <InputLabel className='text-light'>Nhắc lại mật khẩu:</InputLabel>
                    <Input
                        className='signInput'
                        type="password"
                        id="password"
                        onChange={(e)=>handlePassWordChange(e)}
                    />
                </div>
                <div className='signDivBtn'>
                <Button onClick={handleSubmit} className = "signBtn">Đăng Kí</Button>
                </div>
            </form>
        </div>


    );
};

export default LoginForm;
