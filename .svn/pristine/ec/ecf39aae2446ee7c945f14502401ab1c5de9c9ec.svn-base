import baseApi from "../../../common/api/baseApi";

export const requestYes24BookInfoApi = ({ bookName, active, count }) => {
  return baseApi
    .post("/book/getYes24BookInfo",{ 
      bookName : bookName,
      page : active,
      pageSize : count
    },{
      headers : {token: localStorage.getItem("token")}
    })
    .then(response => {   
      return (response.data);
    })
    .catch(error => {
      throw error;
    });
};
