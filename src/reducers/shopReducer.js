import {
    CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, SO_LUONG_SAN_PHAM,
    PRODUCT_IN_SHOPPING, PAGINATION_CHANGE, CLEAR_DATA, STATUS_LOGIN, TANG_SL_PRODUCT, CARD_IN_VIEW,
    GET_ALL_ORDER, GET_ALL_CUSTOMER, GET_FILTER_CUSTOMER,
    GET_PRODUCT_DETAIL, CLEAR_MODAL, GET_ORDER_DETAIL, GET_CUSTOMER_FILTER,
    GET_ORDER_FILTER, GET_CUSTOMER_DETAIL, CLEAR_CUSTOMER_DETAIL, GIAM_SL_PRODUCT,
    GET_SL_ITEM, PAGINATION_ORDER_CHANGE, PAGINATION_CUSTOMER_CHANGE,MOVE_ITEM,
     MESSAGE_LOGIN, STATUS_SIGN
} from "../constants/constant";

const dataState = {
    totalProduct: 0, // độ dài
    totalOrder: 0, 
    totalCustomer: 0, 

    product: "", // dư liệu project
    limit: 9,
    statusLogin: true,
    statusPending: true,
    // trang thái đăng nhập dung/sai
    loginSuccess: false,  
    isAdmin: false,  
    // trang thái đăng kí dung/sai
    messageSign: "",
    signSuccess: false,  

    currentPage: 1,
    currentPageOrder: 1,
    currentPageCustomer: 1,

    productIncard: [], //dữ liệu 1 projet

    dataAddCard: "", //  ??
    soLuongSanPham: null, //call api vaf luu vao day
    dataShopping: [], //call api vaf luu vao day ???
    numberItem: 0,   // số lần click hien tren gio hang
    
    allOrder: "",
    allCustomer: "",

    productDetail: "",
    orderDetail: "",
    customerDetail: "",

}
const shopReducer = (state = dataState, action) => {
    switch (action.type) {
        // trạng thái peding    
        case PAGE_PENDING:
            break;
        // get product list    //
        case CALL_API:
            state.product = action.data
            state.totalProduct = action.totalData
            state.statusPending = false
            break;
        // ấn nút tìm kiếm    //
        case BTN_LOC:
            state.product = action.data
            break;
        // pagination change
        case PAGINATION_CHANGE:
            state.currentPage = action.payload
            break;
        case PAGINATION_ORDER_CHANGE:
            state.currentPageOrder = action.payload
            break;
        case PAGINATION_CUSTOMER_CHANGE:
            state.currentPageCustomer = action.payload
            break;
            //
        case ADD_CARD:
            state.dataAddCard = action.data
            break;
        case PRODUCT_IN_SHOPPING:
            state.dataShopping.push(action.data)
            break;

        case TANG_SL_PRODUCT:
            state.numberItem = state.numberItem + 1;
            break;
        case GIAM_SL_PRODUCT:
            state.numberItem = state.numberItem - 1;
            break;
        case MOVE_ITEM:
            state.numberItem = state.numberItem - action.data;
            break;

        case STATUS_LOGIN:
            console.log(action.payload)
            state.loginSuccess = action.payload
            break;
        case STATUS_SIGN:
            state.signSuccess = action.status
            state.messageSign = action.message
            break;

        case GET_ALL_ORDER:
            state.totalOrder = action.totalOrder
            state.allOrder = action.data
            console.log("get all order")
            break;
        case GET_ALL_CUSTOMER:
            state.totalCustomer = action.totalCustomer
            state.allCustomer = action.data
            console.log("get all customer")
            break;

        case GET_FILTER_CUSTOMER:
            state.allCustomer = action.data
            console.log("get SDT customer")
            break;
        case GET_PRODUCT_DETAIL:
            state.productDetail = action.data
            console.log("get product detail")
            break;
        case CLEAR_MODAL:
            state.productDetail = ""
            console.log("clear modal")
            break;
        case GET_ORDER_DETAIL:
            state.orderDetail = action.data
            console.log("get order detail")
            break;

        case GET_CUSTOMER_FILTER:
            state.allCustomer = action.data
            console.log("get customer detail")
            break;
        case GET_ORDER_FILTER:
            state.allOrder = action.data
            console.log("get order filter")
            break;
            
        case CLEAR_CUSTOMER_DETAIL:
            state.customerDetail = ""
            console.log("get customer detail")
            break;
        case GET_CUSTOMER_DETAIL:
            state.customerDetail = action.data
            console.log("get customer detail")
            break;

        case GET_SL_ITEM:
            state.numberItem = action.data
            break;
        default:
            break;
    }
    return { ...state }
}
export default shopReducer;