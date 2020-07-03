import baseApi from "../../common/api/baseApi";

export const joinApi = ({ empNum, id, name, password }) => {
  return baseApi
    .post("/join", { 
        empNum : empNum,
        mbrId : id,
        mbrName : name,
        password : password
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
