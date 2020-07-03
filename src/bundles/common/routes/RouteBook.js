import React from "react";
import { BookRequestContainer } from '../../book/bookRequest/components';
import BookDetailContainer from "../../book/bookDetail/components/BookDetailContainer";
import { withRouter } from "react-router-dom";

const RouteBook = ({ match, location }) => {
  
  return window.localStorage.getItem("token") && location.pathname === "/bookRequest" ? (
    <BookRequestContainer />
  ) : (
    <BookDetailContainer />
  );
};

export default withRouter(RouteBook);
