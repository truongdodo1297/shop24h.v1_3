import { CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, SO_LUONG_SAN_PHAM, 
    PRODUCT_IN_SHOPPING,PAGINATION_CHANGE, CLEAR_DATA,STATUS_LOGIN,
     TANG_SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT,CARD_IN_VIEW,
     GET_ALL_ORDER, GET_ALL_PRODUCT,GET_ALL_CUSTOMER, GET_FILTER_CUSTOMER, 
     GET_PRODUCT_DETAIL, CLEAR_MODAL, GET_ORDER_DETAIL, GET_CUSTOMER_FILTER, GET_ORDER_FILTER } from "../constants/constant";

const dataState = {
    totalProduct : 0, //tổng số data
    product: [], // dư liệu project
    limit: 9, 
    statusLogin: false, 
    currentPage: 1,
    productIncard: [], //dữ liệu 1 projet
    statusPending: true, 
    dataAddCard: "", //  ??
    soLuongSanPham: null, //call api vaf luu vao day
    dataShopping: [], //call api vaf luu vao day ???
    soLuongItem: 0 ,   // số lần click hien tren gio hang
    allOrder : "",
    allProduct : "",
    productDetail : "",
    orderDetail : "",
    customerDetail : "",
    allCustomer : ""
}
const shopReducer = (state = dataState, action) => {
    switch (action.type) {
        case PAGE_PENDING:
            break;
        case CLEAR_DATA:
            state.dataShopping = []
            break;
        case CALL_API:
            state.product = action.data
            state.totalProduct = action.totalData
            state.statusPending = false
            break;
        case CARD_IN_VIEW:
            state.productIncard = action.data
            break;
        case BTN_LOC:
            state.product = action.data
            break;
        case PAGINATION_CHANGE:
            state.currentPage = action.payload
            break;
        case ADD_CARD:
            state.dataAddCard = action.data
            break;
        case SO_LUONG_SAN_PHAM:
            // console.log(action.data.data + ">")
            state.soLuongSanPham = action.data.data
            break;
        case PRODUCT_IN_SHOPPING:
            state.dataShopping.push(action.data)
            break;
        case TANG_SL_PRODUCT_IN_SHOPPING:
            state.soLuongSanPham.push({
                id: action.data.id,
                soLuong: action.data.soLuong
            })
            break;
        case TANG_SL_PRODUCT:
            state.soLuongSanPham.soLuong =  state.soLuongSanPham.soLuong  + 1;
            break;
        case STATUS_LOGIN:
            state.statusLogin = true
            console.log( state.statusLogin)
            break;
        case GET_ALL_ORDER:
            console.log(action.data)
            state.allOrder = action.data
            console.log( "get all user")
            break;
        case GET_ALL_PRODUCT:
            console.log(action.data)
            state.allProduct = action.data
            console.log( "get all product")
            break;
        case GET_ALL_CUSTOMER:
            console.log(action.data)
            state.allCustomer = action.data
            console.log( "get all customer")
            break;
        case GET_FILTER_CUSTOMER:
            console.log(action.data)
            state.allCustomer = action.data
            console.log( "get SDT customer")
            break;
        case GET_PRODUCT_DETAIL:
            console.log(action.data)
            state.productDetail = action.data
            console.log( "get product detail")
            break;
        case CLEAR_MODAL:
            state.productDetail = ""
            console.log( "clear modal")
            break;
        case GET_ORDER_DETAIL:
            state.orderDetail = action.data
            console.log( "get order detail")
            break;
        case GET_CUSTOMER_FILTER:
            state.allCustomer = action.data
            console.log( "get customer detail")
            break;
        case GET_ORDER_FILTER:
            state.allOrder = action.data
            console.log( "get order filter")
            break;
        default:
            break;
    }
    return { ...state }
}
export default shopReducer;