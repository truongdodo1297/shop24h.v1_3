import { async } from "@firebase/util";
import { type } from "@testing-library/user-event/dist/type";
import { json } from "react-router-dom";
import {
    CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, CARD_IN_VIEW, PAGINATION_CHANGE,
    SO_LUONG_SAN_PHAM, CLEAR_DATA, STATUS_LOGIN, PRODUCT_IN_SHOPPING, SL_PRODUCT_IN_SHOPPING,
    TANG_SL_PRODUCT, GET_ALL_ORDER, GET_ALL_PRODUCT, GET_ALL_CUSTOMER, GET_FILTER_CUSTOMER, GET_PRODUCT_DETAIL,
    CLEAR_MODAL, GET_ORDER_DETAIL, GET_CUSTOMER_FILTER, GET_ORDER_FILTER, GET_CUSTOMER_DETAIL, CLEAR_CUSTOMER_DETAIL,
    GIAM_SL_PRODUCT, GET_SL_ITEM, PAGINATION_ORDER_CHANGE, PAGINATION_CUSTOMER_CHANGE, MESSAGE_LOGIN, STATUS_SIGN,MOVE_ITEM
} from "../constants/constant"

const gURL = "http://localhost:8000";

const callAPI = (currentPage, limit) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnoseTotal = await fetch(gURL + "/product", myHeaders);
            const dataTotal = await respnoseTotal.json();

            const respnose = await fetch(gURL + "/productlimit9?_start=" + ((currentPage - 1) * limit) + "&_limit=" + limit, myHeaders);

            const data = await respnose.json();
            return dispatch({
                type: CALL_API,
                totalData: dataTotal.data.length,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

const btnLoc = (valueInPutFilter) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const res = await fetch(gURL + "/productFiter/:?color=" + valueInPutFilter.color + "&buyPrice=" + valueInPutFilter.price + "&brand=" + valueInPutFilter.brand + "&rating=" + valueInPutFilter.rating, myHeaders);
            const data = await res.json();
            console.log(valueInPutFilter.rating)
            console.log(data)
            return dispatch({
                type: BTN_LOC,
                data: data
            })

        } catch (error) {

        }
    }



}

//?
const onclickCard = (id) => {
    return async (dispatch) => {
        console.log(id);
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(gURL + "/" + id, myHeaders);
            const data2 = await respnose.json();
            console.log(data2);
            return dispatch({
                type: BTN_LOC,
                data: data2
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//lấy về aip để hiển thị lên card
const apiAddCard = (productId) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(gURL + "/productID/" + productId, myHeaders);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: ADD_CARD,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }

    }
}

// gọi api lấy sản phẩm theo id
const ApiItemInShopping = (productId) => {
    console.log("id laf: " + productId)
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(gURL + "/productId/" + productId, myHeaders);
            const data = await respnose.json();
            console.log("api" + data);
            console.log(data);
            return dispatch({
                type: PRODUCT_IN_SHOPPING,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

const addQuantity = () => {
    return {
        type: TANG_SL_PRODUCT,
    }
}
const subtractionSL = () => {
    return {
        type: GIAM_SL_PRODUCT,
    }
}
//lấy về 4 sản phâmr
const callAPILimit3 = () => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(gURL + "/productlimit4", myHeaders);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: CARD_IN_VIEW,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

// gửi đi object gôm id và số lượng
const AddUserProductDetail = (id, soLuong, imgUrl, buyPrice, name) => {
    return async (dispatch) => {
        try {
            const body = {
                method: 'POST',
                body: JSON.stringify({
                    product: id,
                    quantity: soLuong,
                    imgUrl: imgUrl,
                    buyPrice: buyPrice,
                    name: name
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            const respnose = await fetch(gURL + "/post-orderDetail", body);
            const data = await respnose.json();
            console.log(data)
            return;

        }
        catch (error) {
            console.log(error)
        }
    }
}

// lấy về AIP order detail
const callAPIAddUserProductDetail = () => {
    return async (dispatch) => {
        try {
            const body = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            const respnose = await fetch(gURL + "/orderDetail", body);
            const data = await respnose.json();
            // console.log(data)
            return dispatch({
                type: SO_LUONG_SAN_PHAM,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const changePagination = (value) => {
    return {
        type: PAGINATION_CHANGE,
        payload: value
    }
}
const changePaginationOder = (value) => {
    return {
        type: PAGINATION_ORDER_CHANGE,
        payload: value
    }
}
const changePaginationCustomer = (value) => {
    return {
        type: PAGINATION_CUSTOMER_CHANGE,
        payload: value
    }
}


// xóa state lưu thông tin datashoping
const clearData = () => {
    return {
        type: CLEAR_DATA
    }
}
// remove product api

const removeProduct = (productId) => {
    return async (dispatch) => {
        try {
            const body = {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(gURL + "/orderDetail/" + productId, body);
            const data = await respnose.json();
            console.log("Delete order");
            console.log(data);
            return;
        }
        catch (error) {
            console.log(error)
        }
    }
}

const changeStatusLogin = (payload) => {
    return {
        type: STATUS_LOGIN,
        payload: payload
    }
}
const getAllOrder = (currentPage, limit) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const dataTotal = await fetch(gURL + "/order", myHeaders);
            const totalOrder = await dataTotal.json();

            const response = await fetch(gURL + "/orderLimit9?_start=" + ((currentPage - 1) * limit) + "&_limit=" + limit, myHeaders);
            const data = await response.json();

            return dispatch({
                type: GET_ALL_ORDER,
                totalOrder: totalOrder.data.length,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const getAllProduct = () => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(gURL + "/product", myHeaders);
            const data = await respnose.json();
            return dispatch({
                type: GET_ALL_PRODUCT,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const getAllCustomer = (currentPage, limit) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })

            const totalCustomer = await fetch(gURL + "/customer", myHeaders);
            const dataCustomer = await totalCustomer.json();

            const response = await fetch(gURL + "/customerLimit9?_start=" + ((currentPage - 1) * limit) + "&_limit=" + limit, myHeaders);
            const data = await response.json();

            return dispatch({
                type: GET_ALL_CUSTOMER,
                data: data,
                totalCustomer: dataCustomer.data.length

            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const getFilterCusromerBySDT = (SDT) => {
    return async (dispatch) => {
        try {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })
            console.log(gURL + "/customerSTD/" + SDT);

            const respnose = await fetch(gURL + "/customerSDT/" + SDT, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: GET_FILTER_CUSTOMER,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })
            console.log(id);
            const respnose = await fetch(gURL + "/product/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);

            return;
        }
        catch (error) {
            console.log(error)
        }
    }
}
const deleteOrder = (id) => {
    return async (dispatch) => {
        try {
            let raw = JSON.stringify({
                status: "Xóa"
            })
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })
            console.log(id);
            const respnose = await fetch(gURL + "/deleteOrder/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);

            return;
        }
        catch (error) {
            console.log(error)
        }
    }
}
const postProduct = (body) => {
    return async (dispatch) => {
        try {
            let raw = JSON.stringify(
                {
                    name: body.name,
                    description: body.description,
                    type: body.type,
                    imageUrl: body.imageUrl,
                    buyPrice: body.buyPrice,
                    promotionPrice: body.promotionPrice,
                    color: body.color,
                    rating: body.rating,
                    brand: body.brand
                })
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })

            const respnose = await fetch(gURL + "/post-product", requestOptions);
            const data = await respnose.json();
            console.log(data);
            return
        }
        catch (error) {
            console.log(error)
        }
    }
}
const getProductDetail = (id) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })

            const respnose = await fetch(gURL + "/productID/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: GET_PRODUCT_DETAIL,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const getOrdertDetail = (id) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })

            const respnose = await fetch(gURL + "/order/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: GET_ORDER_DETAIL,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const putProduct = (id, body) => {
    return async (dispatch) => {
        try {
            let raw = JSON.stringify({
                name: body.name,
                description: body.description,
                type: body.type,
                imageUrl: body.imageUrl,
                buyPrice: body.buyPrice,
                promotionPrice: body.promotionPrice,
                color: body.color,
                rating: body.rating,
                brand: body.brand
            })
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })
            console.log(raw);

            const respnose = await fetch(gURL + "/product/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return;
        }
        catch (error) {
            console.log(error)
        }
    }
}

const putOrder = (id, vBody) => {
    console.log("??")
    console.log(vBody)
    return async (dispatch) => {
        try {
            let raw = JSON.stringify({
                status: vBody
            })
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })
            console.log(raw);

            const respnose = await fetch(gURL + "/order/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return;
        }
        catch (error) {
            console.log(error)
        }
    }
}
const clearModal = () => {
    return {
        type: CLEAR_MODAL
    }
}

const getFilterCustomer = (fullName, phone) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(gURL + "/customerFilter" + "/:?phone=" + phone + "&fullName=" + fullName, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: GET_CUSTOMER_FILTER,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const getOrdertFilter = (vRaw) => {
    return async (dispatch) => {
        try {
            let orderCode = vRaw.orderCode;
            let phone = vRaw.phone;
            let fullName = vRaw.fullName;
            let startDay = vRaw.startDay
            let endDay = vRaw.endDay
            console.log(vRaw);

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })

            const respnose = await fetch(gURL + "/orderFilter/" + ":?phone=" + phone + "&fullName=" + fullName + "&orderCode=" + orderCode + "&startDay=" + startDay + "&endDay=" + endDay, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: GET_ORDER_FILTER,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

const deleteCustomer = (id) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })
            console.log(id);
            const respnose = await fetch(gURL + "/customer/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return;
        }
        catch (error) {
            console.log(error)
        }
    }
}
const getCustomerDetail = (id) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await dispatch({
                type: PAGE_PENDING
            })

            const respnose = await fetch(gURL + "/customer/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: GET_CUSTOMER_DETAIL,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const clearCustomerDetail = () => {
    return {
        type: CLEAR_CUSTOMER_DETAIL
    }
}
const getSoLuongItem = (data) => {
    return {
        type: GET_SL_ITEM,
        data: data
    }
}
const signIn = (raw) => {

    return async (dispatch) => {
        try {
            console.log(raw)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(raw),
                redirect: 'follow'
            };
            const res = await fetch(gURL + "/user", requestOptions)
            const status = await res.json()
            console.log(status.success)
            return dispatch({
                type: STATUS_SIGN,
                status: status.success,
                message: status.message
            })
        }
        catch (err) {
            console.log(err)
        }

    }
}
const login = (userName, passWord) => {

    return async (dispatch) => {
        try {
            let raw = JSON.stringify({
                userName: userName,
                passWord: passWord
            })
            console.log(raw)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            const res = await fetch(gURL + "/login", requestOptions)
            const messageLogin = await res.json()
            const token = messageLogin.token
            localStorage.setItem("token", token)
            console.log( messageLogin.success)
            return dispatch({
                type: STATUS_LOGIN,
                payload: messageLogin.success
                // isAdmin: messageLogin.data.isAdmin
            })
        }
        catch (err) {
            console.log(err)
        }

    }
}
const moveItem = (number) =>{
    return{
        type: MOVE_ITEM,
        data: number
    }
}
export {
    callAPI,
    btnLoc,
    onclickCard,
    apiAddCard,
    ApiItemInShopping,
    addQuantity,
    subtractionSL,
    callAPILimit3,
    AddUserProductDetail,
    callAPIAddUserProductDetail,
    changePagination,
    clearData,
    removeProduct,
    changeStatusLogin,
    getAllOrder,
    getAllProduct,
    getAllCustomer,
    getFilterCusromerBySDT,
    postProduct,
    deleteProduct,
    getProductDetail,
    putProduct,
    clearModal,
    deleteOrder,
    putOrder,
    getOrdertDetail,
    getFilterCustomer,
    getOrdertFilter,
    deleteCustomer,
    getCustomerDetail,
    clearCustomerDetail,
    getSoLuongItem,
    changePaginationOder,
    changePaginationCustomer,
    login,
    signIn,
    moveItem
}