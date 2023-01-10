import { CALL_API, PAGE_PENDING, BTN_LOC, ADD_CARD, SO_LUONG_SAN_PHAM, PRODUCT_IN_SHOPPING, SL_PRODUCT_IN_SHOPPING } from "../constants/constant";

const dataState = {
    product: [],
    statusPending: false,
    rating: "", // bo
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
        case BTN_LOC:
            state.product = action.data
            break;
        case ADD_CARD:
            state.dataAddCard = action.data
            break;
        case SO_LUONG_SAN_PHAM:
            state.soLuongSanPham = {
                id: action.data.id,
                soLuong: action.data.soLuong,
            };
            console.log("thông tin trong giỏ hàng là");
            console.log(state.soLuongSanPham);
            break;
        case PRODUCT_IN_SHOPPING:
            state.dataShopping = action.data
            break;
        case SL_PRODUCT_IN_SHOPPING:
            state.soLuongItem = state.soLuongItem + 1

            break;
        default:
            break;
    }
    return { ...state }
}
export default shopReducer;