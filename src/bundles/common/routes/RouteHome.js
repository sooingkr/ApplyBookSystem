import React from "react";
import { LoginContainer } from "../../login/components";
import BookListContainer from "../../book/bookList/components/BookListContainer";

const RouteHome = () => {
  if (window.localStorage.getItem("token")) {
    return (
      <>
        <BookListContainer />
      </>
    );
  }
  return (
    <>
      <LoginContainer />
    </>
  );
};

export default RouteHome;
