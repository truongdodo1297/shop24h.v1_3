import { type } from "@testing-library/user-event/dist/type";
import { json } from "react-router-dom";
import {
    CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, CARD_IN_VIEW, PAGINATION_CHANGE,
    SO_LUONG_SAN_PHAM, CLEAR_DATA, STATUS_LOGIN, PRODUCT_IN_SHOPPING, SL_PRODUCT_IN_SHOPPING,
    TANG_SL_PRODUCT, GET_ALL_ORDER, GET_ALL_PRODUCT, GET_ALL_CUSTOMER, GET_FILTER_CUSTOMER, GET_PRODUCT_DETAIL,
    CLEAR_MODAL, GET_ORDER_DETAIL, GET_CUSTOMER_FILTER, GET_ORDER_FILTER, GET_CUSTOMER_DETAIL, CLEAR_CUSTOMER_DETAIL,
    GIAM_SL_PRODUCT, GET_SL_ITEM, PAGINATION_ORDER_CHANGE
} from "../constants/constant"

const URL = "http://localhost:8000";

const callAPI = (currentPage, limit) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnoseTotal = await fetch(URL + "/product", myHeaders);
            const dataTotal = await respnoseTotal.json();

            const respnose = await fetch(URL + "/productlimit9?_start=" + ((currentPage - 1) * limit) + "&_limit=" + limit, myHeaders);

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
            const res = await fetch(URL + "/productFiter/:?color=" + valueInPutFilter.color + "&buyPrice=" + valueInPutFilter.price + "&brand=" + valueInPutFilter.brand + "&rating=" + valueInPutFilter.rating, myHeaders);
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
            const respnose = await fetch(URL + "/" + id, myHeaders);
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
            const respnose = await fetch(URL + "/productID/" + productId, myHeaders);
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
            const respnose = await fetch(URL + "/productId/" + productId, myHeaders);
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

const addNewSL = () => {
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
            const respnose = await fetch(URL + "/productlimit4", myHeaders);
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
            const respnose = await fetch(URL + "/post-orderDetail", body);
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
            const respnose = await fetch(URL + "/orderDetail", body);
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
            const respnose = await fetch(URL + "/orderDetail/" + productId, body);
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

const changeStatusLogin = () => {
    return {
        type: STATUS_LOGIN
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
            const dataTotal = await fetch(URL + "/order", myHeaders);
            const totalOrder = await dataTotal.json();

            const response = await fetch(URL + "/orderLimit9?_start=" + ((currentPage - 1) * limit) + "&_limit=" + limit, myHeaders);
            const data = await response.json();

            console.log(totalOrder.data.length);
            return dispatch({
                type: GET_ALL_ORDER,
                totalOrder: totalOrder.data.length,
                data : data
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
            const respnose = await fetch(URL + "/product", myHeaders);
            const data = await respnose.json();
            console.log(data);
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
const getAllCustomer = () => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch(URL + "/customer", myHeaders);
            const data = await respnose.json();
            console.log(data);
            return dispatch({
                type: GET_ALL_CUSTOMER,
                data: data
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
            console.log(URL + "/customerSTD/" + SDT);

            const respnose = await fetch(URL + "/customerSDT/" + SDT, requestOptions);
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
            const respnose = await fetch(URL + "/product/" + id, requestOptions);
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
            const respnose = await fetch(URL + "/order/" + id, requestOptions);
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

            const respnose = await fetch(URL + "/post-product", requestOptions);
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

            const respnose = await fetch(URL + "/productID/" + id, requestOptions);
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

            const respnose = await fetch(URL + "/order/" + id, requestOptions);
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

            const respnose = await fetch(URL + "/product/" + id, requestOptions);
            const data = await respnose.json();
            console.log(data);
            return;
        }
        catch (error) {
            console.log(error)
        }
    }
}
const putOrder = (id, body) => {
    return async (dispatch) => {
        try {
            let raw = JSON.stringify({
              
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

            const respnose = await fetch(URL + "/order/" + id, requestOptions);
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
const clearModal = () =>{
    return{
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
            console.log(URL + "/customerFilter" +  "/:?phone=" + phone + "&fullName=" + fullName)
            const respnose = await fetch(URL + "/customerFilter" +  "/:?phone=" + phone + "&fullName=" + fullName , requestOptions);
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

            const respnose = await fetch(URL + "/orderFilter/" + ":?phone=" + phone +"&fullName=" + fullName + "&orderCode=" + orderCode + "&startDay=" + startDay + "&endDay=" + endDay, requestOptions);
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
            const respnose = await fetch(URL + "/customer/" + id, requestOptions);
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

            const respnose = await fetch(URL + "/customer/" + id, requestOptions);
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
const clearCustomerDetail = () =>{
    return{
        type:CLEAR_CUSTOMER_DETAIL
    }
}
const getSoLuongItem = (data) =>{
    return{
        type: GET_SL_ITEM,
        data: data
    }
}
export {
    callAPI,
    btnLoc,
    onclickCard,
    apiAddCard,
    ApiItemInShopping,
    addNewSL,
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
    changePaginationOder
}