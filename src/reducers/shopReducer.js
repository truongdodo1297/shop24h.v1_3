import { CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, SO_LUONG_SAN_PHAM, PRODUCT_IN_SHOPPING,STATUS_INPUT,
     SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT_IN_SHOPPING, TANG_SL_PRODUCT,CARD_IN_VIEW } from "../constants/constant";

const dataState = {
    product: [],
    productIncard: [],
    statusPending: false,
    statusinput : false, // bo
    dataAddCard: "",
    soLuongSanPham: [], //id và số lần click vào sp
    dataShopping: [], //call api vaf luu vao day
    soLuongItem: 0   // số lần click hien tren gio hang
}
const shopReducer = (state = dataState, action) => {
    switch (action.type) {
        case PAGE_PENDING:
            break;
        case CALL_API:
            state.product = action.data
            // state.statusPending = false
            break;
        case CARD_IN_VIEW:
            state.productIncard = action.data
            // state.statusPending = false
            break;
        case BTN_LOC:
            state.product = action.data
            break;
        case ADD_CARD:
            state.dataAddCard = action.data
            break;
        case SO_LUONG_SAN_PHAM:
            state.soLuongSanPham = [{
                id: action.data.id,
                soLuong: action.data.soLuong ,
            }]
            console.log("thông tin trong giỏ hàng là");
            console.log(state.soLuongSanPham);
            break;
        case PRODUCT_IN_SHOPPING:
            state.dataShopping.push(action.data)
            break;
        case SL_PRODUCT_IN_SHOPPING:
            state.soLuongItem = state.soLuongItem + 1
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
        default:
            break;
    }
    return { ...state }
}
export default shopReducer;