import {CALL_API,PAGE_PENDING,BTN_LOC} from "../constants/constant";

const dataState = {
    product: [],
    statusPending: false,
    rating: ""

}
const shopReducer = (state = dataState, action)=>{
    switch (action.type) {
        case PAGE_PENDING:
            break;
        case CALL_API:
            state.product = action.data
            // state.statusPending = false
            break;
        case BTN_LOC:
            break;
        default:
            break;
    }
    return {...state}
}
export default shopReducer;