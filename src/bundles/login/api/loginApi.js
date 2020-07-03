import baseApi from "../../common/api/baseApi";

export const loginApi = ({ mbrId, password }) => {
  return baseApi
    .post("/login", { mbrId: mbrId, password: password })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
