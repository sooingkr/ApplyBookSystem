import baseApi from "../../../common/api/baseApi";

export const requestBookApi = ({
  bookName,
  reqType,
  reqYearMonth,
  reqUrl,
  address,
  price,
  bookType,
  etc
}) => {
  return baseApi
    .post(
      "/book/purchaseRequest",
      {
        bookType: bookType,
        bookName: bookName,
        reqType: reqType,
        reqYearMonth: reqYearMonth,
        reqUrl: reqUrl,
        address: address,
        price: price,
        etc: etc
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
