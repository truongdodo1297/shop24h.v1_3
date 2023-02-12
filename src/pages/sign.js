
import { InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { Button, Container, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
import { signIn } from "../actions/action"
const LoginForm = () => {
    const [signStatus, setSignStatus] = useState("")
    const [passWord, setPassWord] = useState("")
    const navigate = useNavigate()
    const { signSuccess, messageSign } = useSelector((reduxData) => reduxData.shopReducer);
    useEffect(() => {
        if (signSuccess) {
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
    const [statusInvalid, setStatusInvalid] = useState({
        userName: false,
        email: false,
        phone: false,
        passWord: false,
        rePassWord: false
    });
    const validateInput = () => {
        if (formData.userName == "") {
            setStatusInvalid(prevState => ({
                ...prevState,
                userName : true
            }))
            return false;
        }
        setStatusInvalid(prevState => ({
            ...prevState,
            userName : false
        }))
        if (formData.email == "") {
            setStatusInvalid(prevState => ({
                ...prevState,
                email : true
            }))
            return false
        }
        setStatusInvalid(prevState => ({
            ...prevState,
            email : false
        }))
        if (formData.phone == "") {
            setStatusInvalid(prevState => ({
                ...prevState,
                phone : true
            }))
            return false
        }
        setStatusInvalid(prevState => ({
            ...prevState,
            phone : false
        }))
        console.log(formData.phone.length)
        if (formData.phone.length < 10) {
            setStatusInvalid(prevState => ({
                ...prevState,
                phone : true
            }))
            return false
        }
        setStatusInvalid(prevState => ({
            ...prevState,
            phone : false
        }))
        if (formData.passWord !== passWord) {
            setStatusInvalid(prevState => ({
                ...prevState,
                rePassWord : true
            }))
            return false
        }
        setStatusInvalid(prevState => ({
            ...prevState,
            rePassWord : false
        }))
        return true
    }
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };
    const handlePassWordChange = (e) => {
        setPassWord(e.target.value)
    }

    const handleSubmit = () => {
        console.log(formData)
        validateInput()
        if (validateInput())
            dispatch(signIn(formData))
    };

    return (
        <div className='SignDiv'>
            <div className="SignForm">
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
                        invalid={statusInvalid.userName}
                    />
                    <FormFeedback invalid  >
                        Tên tài khoản không được bỏ trống 
                    </FormFeedback>
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
                        invalid={statusInvalid.email}
                    />
                    <FormFeedback invalid  >
                        Email không được bỏ trống
                    </FormFeedback>
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
                        invalid={statusInvalid.phone}
                    />
                    <FormFeedback invalid  >
                        Số điện thoại không hợp lệ
                    </FormFeedback>
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
                        invalid={statusInvalid.passWord}
                    />
                    <FormFeedback invalid  >
                        Pass word không đúng
                    </FormFeedback>
                </div>
                <div>
                    <InputLabel className='text-light'>Nhắc lại mật khẩu:</InputLabel>
                    <Input
                        className='signInput'
                        type="password"
                        id="password"
                        onChange={(e) => handlePassWordChange(e)}
                        invalid={statusInvalid.rePassWord}
                    />
                    <FormFeedback invalid  >
                    Pass word không đúng
                    </FormFeedback>
                </div>
                <div className='signDivBtn'>
                    <Button onClick={handleSubmit} className="signBtn">Đăng Kí</Button>
                </div>
            </div>
        </div>


    );
};

export default LoginForm;
