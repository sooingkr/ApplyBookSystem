import baseApi from "../../../common/api/baseApi";

export const bookListApi = data => {
  let payload = {};

  if (
    data !== null &&
    data.selectCondition !== null &&
    data.selectValue != null
  ) {
    payload = { [data.selectCondition]: data.selectValue };
  }

  return baseApi
    .post(
      "/books/purchaseRequest",

      payload,
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
