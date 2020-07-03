import baseApi from "../../../common/api/baseApi";

export const bookApi = ordNum => {
  return baseApi
    .get(`/book/purchaseRequestDetail/${ordNum}`, {
      headers: { token: localStorage.getItem("token") }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
