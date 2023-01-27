import {
    CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, CARD_IN_VIEW,PAGINATION_CHANGE,
    SO_LUONG_SAN_PHAM,CLEAR_DATA,STATUS_LOGIN, PRODUCT_IN_SHOPPING, SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT
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
            const dataTotal =  await respnoseTotal.json();

            const respnose = await fetch(URL + "/productlimit9?_start=" + ((currentPage-1) * limit) + "&_limit=" + limit, myHeaders);

            const data = await respnose.json();
            return dispatch({
                type: CALL_API,
                totalData : dataTotal.data.length,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

const btnLoc = (valueInPutFilter) => {
return async(dispatch) => {
try {
    var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const res = await fetch(URL + "/productFiter/:?color=" +  valueInPutFilter.color + "&buyPrice=" +  valueInPutFilter.price + "&brand=" +  valueInPutFilter.brand + "&rating=" + valueInPutFilter.rating, myHeaders);
            const data =  await res.json();
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
            const respnose = await fetch(URL +  "/productID/" + productId, myHeaders);
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

const changeSoLuong = (soLuong, id) => {
    //lấy được số lần click
    // loại sản phẩm
    const data = {
        soLuong: soLuong,
        id: id
    }
    // console.log(data);
    return {
        type: SO_LUONG_SAN_PHAM,
        data: data
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
const soLuongProduct = () => {
    return {
        type: SL_PRODUCT_IN_SHOPPING,
    }
}

const addNewSL = () => {
    return {
        type: TANG_SL_PRODUCT,
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
                    imgUrl : imgUrl,
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
const callAPIAddUserProductDetail = ()=> {
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
const changePagination = (value) =>{
    return{
        type: PAGINATION_CHANGE,
        payload: value
    }
}

// xóa state lưu thông tin datashoping
const clearData = () =>{
    return{
        type: CLEAR_DATA
    }
}
// remove product api

const removeProduct = (productId) =>{
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
            return ;
        }
        catch (error) {
            console.log(error)
        }
    }
}

const changeStatusLogin = () =>{
    return{
    type: STATUS_LOGIN
    }
}
export {
    callAPI,
    btnLoc,
    onclickCard,
    apiAddCard,
    changeSoLuong,
    ApiItemInShopping,
    soLuongProduct,
    addNewSL,
    callAPILimit3,
    AddUserProductDetail,
    callAPIAddUserProductDetail,
    changePagination,
    clearData,
    removeProduct,
    changeStatusLogin
}