import baseApi from "../../../common/api/baseApi";
import { RIDI_PRODUCT_URL } from "../../../common/constants/commonConstant";

export const requestRidiBookInfoApi = ({ bookName, active }) => {
  return baseApi
    .post(
      RIDI_PRODUCT_URL,
      {
        bookName: bookName,
        page: active
      },
      {
        headers: { token: localStorage.getItem("token") }
      }
    )

    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
