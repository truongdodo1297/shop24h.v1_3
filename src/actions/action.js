import {
    CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, STATUS_INPUT, CARD_IN_VIEW,PAGINATION_CHANGE,
    SO_LUONG_SAN_PHAM, PRODUCT_IN_SHOPPING, SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT
} from "../constants/constant"

const callAPI = (limit,currentPage) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const respnoseTotal = await fetch("http://localhost:8000/product", myHeaders);
            const dataTotal =  await respnoseTotal.json();

            const respnose = await fetch("http://localhost:8000/product?_start=" + ((currentPage-1) * limit) + "&_limit=" + limit, myHeaders);

            const data = await respnose.json();
            // console.log(data);
            return dispatch({
                type: CALL_API,
                data: data,
                totalData : dataTotal.lenght
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
const btnLoc = (valueInPutFilter) => {
    console.log(valueInPutFilter);
    var dieuKien = [];

    let rating = "";
    let color = "";
    let brand = "";
    console.log("----Lọc----")

    if (valueInPutFilter.rating !== undefined) {
        dieuKien.push({ text: "Rating", value: valueInPutFilter.rating})
        //lọc theo rating
        console.log(" không có color => chỉ có rating");
        console.log(dieuKien);


        // return async (dispatch) => {
        //     try {
        //         var myHeaders = new Headers();
        //         myHeaders.append("Content-Type", "application/json");
        //         console.log(valueInPutFilter.color);
        //         await dispatch({
        //             type: PAGE_PENDING
        //         })
        //         const URL = "http://localhost:8000/productrating/:?rating=" + valueInPutFilter.rating;
        //         const respnose = await fetch(URL + rating + color, myHeaders);
        //         const data2 = await respnose.json();
        //         console.log(data2);
        //         return dispatch({
        //             type: BTN_LOC,
        //             data: data2
        //         })
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
    }

    if (valueInPutFilter.color !== undefined) {
        // lọc theo color
        console.log(" không có color => chỉ có rating");
        return async (dispatch) => {
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                console.log(valueInPutFilter.color);

                await dispatch({
                    type: PAGE_PENDING
                })
                const URL = "http://localhost:8000/product/:?color=" + valueInPutFilter.color;
                const respnose = await fetch(URL + rating + color, myHeaders);
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
    if (valueInPutFilter.brand !== undefined) {
        // lọc theo brand
        console.log(" chỉ có brand");
        return async (dispatch) => {
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                await dispatch({
                    type: PAGE_PENDING
                })
                const URL = "http://localhost:8000/product" + dieuKien[0].text + "/:?" + dieuKien[0].text + "=" + dieuKien[0].value;
                console.log(URL);

                const respnose = await fetch(URL + rating + color, myHeaders);
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
    if(dieuKien.length == 1){
        console.log("loc 1 dk")
        return async (dispatch) => {
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                await dispatch({
                    type: PAGE_PENDING
                })
                const URL = "http://localhost:8000/product" + dieuKien[0].text + "/:?" + dieuKien[0].text + "=" + dieuKien[0].value;

                const respnose = await fetch(URL + rating + color, myHeaders);
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
            const respnose = await fetch("http://localhost:8000/productID/" + productId, myHeaders);
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
            const respnose = await fetch("http://localhost:8000/productId/" + productId, myHeaders);
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
const AddUserProductDetail = (id, soLuong) => {
    return async (dispatch) => {
        try {
            const body = {
                method: 'POST',
                body: JSON.stringify({
                    product: id,
                    quantity: soLuong
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            const respnose = await fetch("http://localhost:8000/post-orderDetail", body);
            const data = await respnose.json();
            console.log(data)
            return;
            // return dispatch({
            //     type: PRODUCT_IN_SHOPPING,
            //     data: data
            // })
        }
        catch (error) {
            console.log(error)
        }
    }
}

const callAPIAddUserProductDetail = (id, soLuong) => {
    return async (dispatch) => {
        try {
            const body = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            const respnose = await fetch("http://localhost:8000/orderDetail", body);
            const data = await respnose.json();
            console.log(data)
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
    callAPILimit3,
    AddUserProductDetail,
    callAPIAddUserProductDetail,
    changePagination
}