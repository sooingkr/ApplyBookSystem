import axios from "axios";
import { KYOBO_PRODUCT_URL } from "../../../common/constants/commonConstant";

export const requestKyoboBookInfoApi = ({ bookName, active }) => {
  return axios
    .get(
      KYOBO_PRODUCT_URL + "autoKeyWord=" + bookName + "&currentPage=" + active
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
