import { FormGroup, Pagination, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonDropdown, Col, Input, Row, Table, DropdownToggle, DropdownItem, InputGroup, DropdownMenu, Modal, ModalHeader, Label, ModalBody, ModalFooter, CloseButton } from "reactstrap";
import { getAllProduct, callAPI, postProduct, deleteProduct, getProductDetail, putProduct, clearModal, changePagination } from "../actions/action";

const AdminProduct = () => {
    const dispatch = useDispatch();
    const { limit, product, productDetail, currentPage, totalProduct } = useSelector((reduxData) => reduxData.shopReducer);
    // state modal và row bị ẩn
    const [infoProduct, setInfoProduct] = useState("none")
    const [noneInfoProduct, setNoneInfoProduct] = useState()

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
    useEffect(() => {
        dispatch(callAPI(currentPage, limit))

    }, [productAtModal, modalDetail, noneInfoProduct, modalDeleteProduct, currentPage])
    const noPage = Math.ceil(totalProduct / limit);
    const onChangePagination = (event, value) => {
        dispatch(changePagination(value));
    }
    // hiện row nhập thông tin sản phẩm
    const onBtnThemSanPham = () => {
        console.log("Them sản phẩm")
        setInfoProduct("flex")
        setNoneInfoProduct("none")
        dispatch(getAllProduct())

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
        setmodalDeleteProduct(false)
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

    let styleFilter = {
        marginTop: "5px",
        height: "120px",
        borderRadius: "17px",
        border: "1px solid blue",
        width: "97%",
        padding: "18px",
        marginLeft: "20px"
    }
    let styleProduct = {
        borderRadius: "30px",
        border: "1px solid blue",
        marginTop: "5px",
        width: "97%",
        marginLeft: "20px"
    }

    return (
        <>
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

            {product ?
                <>
                    <Col style={styleFilter}>
                        <Row>
                            <Col xs="2" style={{ display: noneInfoProduct }} ><Button outline color="primary" onClick={onBtnThemSanPham}>Thêm sản phẩm</Button></Col>
                            <Col xs="2" style={{ display: infoProduct }}><Button outline color="primary" onClick={onPostProduct}>Thêm sản phẩm</Button></Col>
                        </Row>
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

                    </Col>
                    <Col style={styleProduct}>
                        <Table responsive >
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
                                    <th></th>
                                </tr>
                            </thead>
                            {console.log(product)}
                            {product.data.map((el, index) => {
                                return (
                                    <tbody className="text-left" key={index}>
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
                                            <td style={{ maxHeight: "100px", textOverflow: "ellipsis" }}>
                                                {el.description}
                                            </td>
                                            <td>
                                                {el.promotionPrice}
                                            </td>
                                            <td>
                                                {el.rating}
                                            </td>
                                            <td style={{ width: "110px" }}>
                                                <Button className="me-1 mb-1" outline size="sm" color="primary" onClick={() => onBtnSua(el._id)}>Sửa</Button>
                                                <Button outline size="sm" color="danger" onClick={() => onBtnDeleteProduct(el.name, el._id)}>Xóa</Button>
                                            </td>
                                        </tr>
                                    </tbody>

                                )
                            })}


                        </Table>
                        <Stack>
                            <Pagination count={noPage} defaultPage={currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
                        </Stack>
                    </Col>

                </> : <h1>??</h1>
            }

        </>
    )
}

export default AdminProduct