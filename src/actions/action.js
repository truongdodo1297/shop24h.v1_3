import { CALL_API, PAGE_PENDING, BTN_LOC } from "../constants/constant"

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
const btnLoc = (valueFilter) => {
    console.log("----Lọc----")
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            await dispatch({
                type: PAGE_PENDING
            })
            const URL = "http://localhost:8000/productt";
            const rating = valueFilter.rating;
            console.log(rating);
            const respnose = await fetch(URL + "?" +  "rating" + "=" + rating, myHeaders);
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
const onclickCard = (id)=>{
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

export {
    callAPI,
    btnLoc,
    onclickCard
}