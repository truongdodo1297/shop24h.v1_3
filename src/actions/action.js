import {
    CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, STATUS_INPUT,CARD_IN_VIEW,
    SO_LUONG_SAN_PHAM, PRODUCT_IN_SHOPPING, SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT
} from "../constants/constant"

const callAPI = () => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch("http://localhost:8000/product", myHeaders);
            const data = await respnose.json();
            // console.log(data);
            return dispatch({
                type: CALL_API,
                data: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const btnLoc = (valueInPutFilter) => {
    console.log(valueInPutFilter);
    
    let rating = "";
    let color = "";
    console.log("----Lọc----")
  if(valueInPutFilter.rating !== undefined){
    rating =  "?" + "rating" + "=" + valueInPutFilter.rating
  }
  if(valueInPutFilter.color !== undefined){
    color =   "&" + "color" + "=" + valueInPutFilter.color
  }
    
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const URL = "http://localhost:8000/product";

            console.log(rating);
            console.log(color);
            const respnose = await fetch(URL + rating +  color, myHeaders);
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
const onclickCard = (id) => {
    return async (dispatch) => {
        console.log(id);
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            await dispatch({
                type: PAGE_PENDING
            })
            const URL = "http://localhost:8000/product";
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
const apiAddCard = (productId) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch("http://localhost:8000/product/" + productId, myHeaders);
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
const ApiItemInShopping = (productId) => {
    console.log("id laf: " + productId)
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch("http://localhost:8000/product/" + productId, myHeaders);
            const data = await respnose.json();
            console.log("api" + data);
            // console.log(data);
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
const addNewProduct = (soLuong, id) => {
    const data = {
        soLuong: soLuong,
        id: id
    }
    // console.log(data);
    return {
        type: TANG_SL_PRODUCT_IN_SHOPPING,
        data: data
    }
}
const addNewSL = () => {
    return {
        type: TANG_SL_PRODUCT,
    }
}
const callAPILimit3 = () => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnose = await fetch("http://localhost:8000/productlimit", myHeaders);
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

export {
    callAPI,
    btnLoc,
    onclickCard,
    apiAddCard,
    changeSoLuong,
    ApiItemInShopping,
    soLuongProduct,
    addNewProduct,
    addNewSL,
    callAPILimit3
}