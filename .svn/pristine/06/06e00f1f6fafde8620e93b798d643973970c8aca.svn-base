import baseApi from "../../../common/api/baseApi";

export const updateUserApi = ({ oldPassword, password }) => {
  return baseApi
    .post("/member/updateUserPassword", { 
        oldPassword : oldPassword,
        password : password
    },{
      headers : {token: localStorage.getItem("token")}
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
