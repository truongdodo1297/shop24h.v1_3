import { Close } from "@mui/icons-material";
import { FormGroup, TextField } from "@mui/material";
import { width } from "@mui/system";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { Button, ButtonDropdown, Col, Input, Row, Table, DropdownToggle, DropdownItem, InputGroup, DropdownMenu, Modal, ModalHeader, Label, ModalBody, ModalFooter, CloseButton } from "reactstrap";
import {
    getAllOrder, getAllProduct, getAllCustomer, getFilterCusromerBySDT,
    postProduct, deleteProduct, getProductDetail, putProduct, clearModal,
    deleteOrder, getOrdertDetail, getFilterCustomer
} from "../actions/action";

import AdminOrder from "./adminOrder"
import AdminCustomer from "./adminCustomer"

const Admin = () => {
    const dispatch = useDispatch();
    const { allOrder, allProduct, allCustomer, productDetail, orderDetail } = useSelector((reduxData) => reduxData.shopReducer);

    useEffect(() => { }, [allCustomer, allOrder, productDetail])

    const onGetAllOrder = () => {
        dispatch(getAllOrder());
    }

    const onGetAllProduct = () => {
        dispatch(getAllProduct())
    }
    const onGetAllCustomer = () => {
        dispatch(getAllCustomer())
    }

    //
    const filterOrderSTD = (e) => {
        console.log(e.target.value)
    }
    const SDTChange = (e) => {
        setSdt(e.target.value)
    }
    const filterCustomerSTD = () => {
        console.log("lọc theo SDT")
        dispatch(getFilterCusromerBySDT(sdt))

    }
    // hiện row nhập thông tin sản phẩm
    const onBtnThemSanPham = () => {
        console.log("Them sản phẩm")
        setInfoProduct("flex")
        setNoneInfoProduct("none")
    }
    // thây đổi các state
    const setImgValue = (e) => {
        setImg(e.target.value)
    }
    const setNameValue = (e) => {
        setName(e.target.value)
    }

    const setTypeValue = (e) => {
        setType(e.target.value)
    }

    const setPiricetValue = (e) => {
        setPiricet(e.target.value)
    }

    const setColorValue = (e) => {
        setColor(e.target.value)
    }

    const setDescriptionValue = (e) => {
        setDescription(e.target.value)
    }

    const setPromotionPriceValue = (e) => {
        setPromotionPrice(e.target.value)
    }

    const setRatingValue = (e) => {
        setRating(e.target.value)
    }

    const setBrandValue = (e) => {
        setBrand(e.target.value)
    }
    // thây đổi các state của modal product detail 
    const changeImgProductDetail = (e) => {
        setImgDetail(e.target.value)
    }
    const changeNameProductDetail = (e) => {
        setNameDetail(e.target.value)
    }
    const changeTypeProductDetail = (e) => {
        setTypeDetail(e.target.value)
    }
    const changePriceProductDetail = (e) => {
        setPiricetDetailDetail(e.target.value)
    }
    const changeColorProductDetail = (e) => {
        setColorDetail(e.target.value)
    }
    const changeDescriptionProductDetail = (e) => {
        setDescriptionDetail(e.target.value)
    }
    const changePromotiomPriceProductDetail = (e) => {
        setPromotionPriceDetail(e.target.value)
    }
    const changeRatingProductDetail = (e) => {
        setRatingDetail(e.target.value)
    }
    const changeBrandProductDetail = (e) => {
        setBrandDetails(e.target.value)
    }
    // hiện modal khi ấn nút xóa
    const onBtnDeleteProduct = (name, id) => {
        console.log(name)
        setmodalDeleteProduct(true)
        setProductAtModal(name)
        setIdProductAtModal(id)
    }
    // thực hiện xóa product
    const deleteProductItem = () => {
        console.log("xóa sp")
        dispatch(deleteProduct(idProductAtModal))
    }
    // đóng modal delete product
    const closeModalDeleteProduct = () => {
        setmodalDeleteProduct(false)
    }
    // đóng modal product detail
    const closeModalDetail = () => {
        setModalDetail(false)
    }
    // hiện modal product detail
    const onBtnSua = (id) => {
        console.log("sua")
        dispatch(clearModal())
        dispatch(getProductDetail(id))
        setModalDetail(true)
        setIdProductDetail(id)
    }
    //    thực hiên update product
    const onBtnUpdate = () => {
        console.log("update")
        let raw = {
            name: nameDetail,
            description: descriptionDetail,
            type: typeDetail,
            imageUrl: imgDetail,
            buyPrice: priceDetail,
            promotionPrice: promotionPriceDetail,
            color: colorDetail,
            rating: ratingDetail,
            brand: brandDetail
        }
        dispatch(putProduct(idProductDetail, raw))
        setModalDetail(false)
    }
    // 
    const onPostProduct = () => {
        console.log("post sản phẩm")
        let body = {
            name: name,
            description: description,
            type: type,
            imageUrl: img,
            buyPrice: price,
            promotionPrice: promotionPrice,
            color: color,
            rating: rating,
            brand: brand
        }
        dispatch(postProduct(body))
        setModalDetail(false)
    }
    const closeRow = () => {
        console.log("ĐÓNG")
        setInfoProduct("none")
        setNoneInfoProduct("block")

    }

    // state modal và row bị ẩn
    const [infoProduct, setInfoProduct] = useState("none")
    const [noneInfoProduct, setNoneInfoProduct] = useState()


    const [sdt, setSdt] = useState()

    const [modalDetail, setModalDetail] = useState(false)
    const [modalDeleteProduct, setmodalDeleteProduct] = useState()
    const [productAtModal, setProductAtModal] = useState()
    const [idProductAtModal, setIdProductAtModal] = useState()


    const [name, setName] = useState()
    const [type, setType] = useState()
    const [img, setImg] = useState()
    const [price, setPiricet] = useState()
    const [color, setColor] = useState()
    const [description, setDescription] = useState()
    const [promotionPrice, setPromotionPrice] = useState()
    const [rating, setRating] = useState()
    const [brand, setBrand] = useState()

    const [idProductDetail, setIdProductDetail] = useState()
    const [nameDetail, setNameDetail] = useState()
    const [typeDetail, setTypeDetail] = useState()
    const [imgDetail, setImgDetail] = useState()
    const [priceDetail, setPiricetDetailDetail] = useState()
    const [colorDetail, setColorDetail] = useState()
    const [descriptionDetail, setDescriptionDetail] = useState()
    const [promotionPriceDetail, setPromotionPriceDetail] = useState()
    const [ratingDetail, setRatingDetail] = useState()
    const [brandDetail, setBrandDetails] = useState()
    // order

    // ấn nút xóa order
    const onBtnDeleteOrder = (name, id) => {
        setValueModalOder(id)
        setNameModalOder(name)
        console.log(name)
        setDislpayModalOder(true)
        // thực hiên xóa order    
    }
    const deleteOrder = () => {
        dispatch(deleteOrder(valueModalOder))
    }
    const closeModalDeleteOrder = () => {
        setDisplayModalOderDetail(false)
    }

    //state order
    const [valueModalOder, setValueModalOder] = useState()
    const [nameModalOder, setNameModalOder] = useState()
    const [dislpayModalOder, setDislpayModalOder] = useState(false)

    const [dislpayModalOderDetail, setDisplayModalOderDetail] = useState(false)

    // ấn nút sửa order
    const onBtnSuaOrder = (id) => {
        dispatch(getOrdertDetail(id))
        setDisplayModalOderDetail(true)
    }

    return (
        <>

            {
                productDetail.data ?
                    <>
                        <Modal isOpen={modalDetail}>
                            <ModalHeader >Sửa thông tin sản phẩm</ModalHeader>
                            <ModalBody>
                                <TextField className="mt-2" fullWidth label="Ảnh" size="small" defaultValue={productDetail.data.imageUrl} onChange={changeImgProductDetail} value={imgDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Tên sản phẩm " size="small" defaultValue={productDetail.data.name} onChange={changeNameProductDetail} value={nameDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Loại" size="small" defaultValue={productDetail.data.type} onChange={changeTypeProductDetail} value={typeDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Giá bán " size="small" defaultValue={productDetail.data.buyPrice} onChange={changePriceProductDetail} value={priceDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Màu sắc" size="small" defaultValue={productDetail.data.color} onChange={changeColorProductDetail} value={colorDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Mô tả" size="small" defaultValue={productDetail.data.description} onChange={changeDescriptionProductDetail} value={descriptionDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Giá Giảm " size="small" defaultValue={productDetail.data.promotionPrice} onChange={changePromotiomPriceProductDetail} value={promotionPriceDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Đánh giá" size="small" defaultValue={productDetail.data.rating} onChange={changeRatingProductDetail} value={ratingDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Thương hiệu" size="small" defaultValue={productDetail.data.brand} onChange={changeBrandProductDetail} value={brandDetail}></TextField>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" type="submit" onClick={() => onBtnUpdate()}>
                                    Cập nhập
                                </Button>
                                <Button color="secondary" onClick={() => closeModalDetail()} >
                                    Đóng
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </> : ""
            }
            {
                orderDetail.data ?
                    <>
                        <Modal isOpen={dislpayModalOderDetail}>
                            <ModalHeader >Sửa thông tin order</ModalHeader>
                            <ModalBody>
                                <TextField className="mt-2" fullWidth label="Ngày đặt hàng" size="small" defaultValue={orderDetail.data.orderDate}  ></TextField>
                                <TextField className="mt-2" fullWidth label="Tên khách hàng " size="small" defaultValue={orderDetail.data.customer.fullName} ></TextField>
                                <TextField className="mt-2" fullWidth label="Số điện thoại" size="small" defaultValue={orderDetail.data.customer.phone}  ></TextField>
                                <TextField className="mt-2" fullWidth label="Địa chỉ " size="small" defaultValue={orderDetail.data.customer.address.city}  ></TextField>
                                <TextField className="mt-2" fullWidth label="Ưu cầu khác" size="small" defaultValue={orderDetail.data.requirement}></TextField>
                                {/* <TextField className="mt-2" fullWidth label="" size="small" defaultValue={productDetail.data.description} onChange={changeDescriptionProductDetail} value={descriptionDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Giá Giảm " size="small" defaultValue={productDetail.data.promotionPrice} onChange={changePromotiomPriceProductDetail} value={promotionPriceDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Đánh giá" size="small" defaultValue={productDetail.data.rating} onChange={changeRatingProductDetail} value={ratingDetail}></TextField>
                                <TextField className="mt-2" fullWidth label="Thương hiệu" size="small" defaultValue={productDetail.data.brand} onChange={changeBrandProductDetail} value={brandDetail}></TextField> */}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" type="submit" onClick={() => onBtnUpdate()}>
                                    Cập nhập
                                </Button>
                                <Button color="secondary" onClick={() => setDisplayModalOderDetail(false)} >
                                    Đóng
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </> : ""
            }


            <Modal isOpen={modalDeleteProduct}>
                <ModalHeader>Bạn có chắc muốn xóa sản phẩm:  </ModalHeader>
                <ModalBody>
                    <h5>{productAtModal}</h5>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => deleteProductItem()}>Xóa</Button>
                    <Button onClick={closeModalDeleteProduct}>Đóng</Button>
                </ModalFooter>
            </Modal>


            <Row>
                <Col xs = "0"><CloseButton></CloseButton></Col>
                <Col xs="2" className="bg-light text-center">
                    <Row className="bg-danger mt-3" onClick={onGetAllOrder}>
                        <h6>Tất cả Order</h6>
                    </Row>
                    <Row className="bg-danger mt-3" onClick={onGetAllProduct}>
                        <h6>Danh sách sản phẩm</h6>
                    </Row>
                    <Row className="bg-danger mt-3" onClick={onGetAllCustomer}>
                        <h6>Danh sách khách hàng</h6>
                    </Row>
                </Col>
                <Col>
                    {allProduct.data ?
                        <>
                            <Row>
                                <Col xs="2" style={{ display: noneInfoProduct, marginTop: "30px" }}><Button onClick={onBtnThemSanPham}>Thêm sản phẩm</Button></Col>
                                <Col xs="2" style={{ display: infoProduct, marginTop: "30px" }}><Button outline color="primary" onClick={onPostProduct}>Thêm sản phẩm</Button></Col>
                                <Row style={{ display: infoProduct, marginTop: " 10px" }}>
                                    <Col> <TextField label="Ảnh" size="small" onChange={setImgValue}></TextField></Col>
                                    <Col> <TextField label="Tên sản phẩm " size="small" onChange={setNameValue}></TextField></Col>
                                    <Col> <TextField label="Loại" size="small" onChange={setTypeValue}></TextField></Col>
                                    <Col> <TextField label="Giá bán " size="small" onChange={setPiricetValue} ></TextField></Col>
                                    <Col> <TextField label="Màu sắc" size="small" onChange={setColorValue}></TextField></Col>
                                    <Col> <TextField label="Mô tả" size="small" onChange={setDescriptionValue}></TextField></Col>
                                    <Col> <TextField label="Giá Giảm " size="small" onChange={setPromotionPriceValue}></TextField></Col>
                                    <Col> <TextField label="Đánh giá" size="small" onChange={setRatingValue}></TextField></Col>
                                    <Col> <TextField label="Thương hiệu" size="small" onChange={setBrandValue}></TextField></Col>
                                    <Col> <CloseButton size="small" onClick={() => closeRow()}></CloseButton></Col>
                                </Row>

                            </Row>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>
                                            STT
                                        </th>
                                        <th>
                                            Ảnh
                                        </th>
                                        <th style={{ width: "320px" }}>
                                            Tên sản phẩm
                                        </th>
                                        <th>
                                            Thương hiệu
                                        </th>
                                        <th>
                                            Loại
                                        </th>
                                        <th>
                                            Giá bán
                                        </th>
                                        <th>
                                            Màu sắc
                                        </th>
                                        <th style={{ width: "70px" }}>
                                            Mô tả
                                        </th>
                                        <th>
                                            Giá Giảm
                                        </th>
                                        <th>
                                            Đánh giá
                                        </th>
                                        <th>

                                        </th>
                                    </tr>
                                </thead>

                                {allProduct.data.map((el, index) => {
                                    return (
                                        <tbody className="text-left">
                                            <tr>
                                                <th scope="row">
                                                    {index + 1}
                                                </th>
                                                <td style={{ height: "70px" }}>
                                                    <img src={el.imageUrl}></img>
                                                </td>
                                                <td >
                                                    {el.name}
                                                </td>
                                                <td>
                                                    {el.brand}
                                                </td>
                                                <td>
                                                    {el.type}
                                                </td>
                                                <td>
                                                    {el.buyPrice}
                                                </td>
                                                <td>
                                                    {el.color}
                                                </td>
                                                <td>
                                                    {el.description}
                                                </td>
                                                <td>
                                                    {el.promotionPrice}
                                                </td>
                                                <td>
                                                    {el.rating}
                                                </td>
                                                <td style={{ width: "110px" }}>
                                                    <Button outline size="sm" color="primary" onClick={() => onBtnSua(el._id)}>Sửa</Button>
                                                    <Button outline size="sm" color="danger" className="m-1" onClick={() => onBtnDeleteProduct(el.name, el._id)}>Xóa</Button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    )
                                })}


                            </Table>
                        </> : ""
                        }

                    {allOrder ?

                        <AdminOrder></AdminOrder>
                        : ""}

                    {allCustomer ?
                      <AdminCustomer></AdminCustomer>
                      : ""}


                </Col>
            </Row>
        </>
    )
}
export default Admin;