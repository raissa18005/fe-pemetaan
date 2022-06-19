import { publicRequest } from "../requestMethods";
import {
    getCultureFailure,
    getCultureStart,
    getCultureSuccess,
} from "./cultureRedux";

export const getAllCultures = async (dispatch) => {
    dispatch(getCultureStart());
    try {
        const res = await publicRequest.get("/cultures");
        dispatch(getCultureSuccess(res.data));
    } catch (err) {
        dispatch(getCultureFailure());
    }
};
