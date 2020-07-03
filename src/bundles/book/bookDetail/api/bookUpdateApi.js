import baseApi from "../../../common/api/baseApi";

export const bookUpdateApi = ({ ordNum, status, rejectReason = null }) => {
  return baseApi
    .post(
      "/book/updatePurchaseRequest",
      {
        ordNum: ordNum,
        status: status,
        rejectReason: rejectReason
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
