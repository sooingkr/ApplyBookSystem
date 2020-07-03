import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { BookDetail } from "./";
import { bookAction } from "../actionCreators";
import ModalContainer from "./ModalContainer";
import { bookUpdateAction, bookUpdateInit } from "../actionCreators";
import { logout } from "../../../common/actionCreators/";

const UPDATE_BOOK_SUCCESS_MSG = "변경이 완료되었습니다.";

const BookDetailContainer = ({ history, location }) => {
  const dispatch = useDispatch();
  const [ordNum, setOrdNum] = useState();
  const [open, setOpen] = useState(false);

  const { book, bookError, isBookUpdated } = useSelector(
    ({ bookReducer, bookUpdateReducer }) => ({
      book: bookReducer.book,
      bookError: bookReducer.bookError,
      isBookRequesting: bookReducer,
      isBookUpdated: bookUpdateReducer.isBookUpdated
    })
  );

  const isAdmin = window.localStorage.getItem("adminYn");
  let isRequest = false;
  let isApproval = false;

  if (book) {
    isRequest = book.status === "REQUEST";
    isApproval = book.status === "APPROVAL";
  }

  const onUpdateClick = useCallback(() => {
    setOpen(open => {
      return true;
    });
  }, []);

  const onCancleClick = useCallback(() => {
    const status = "CANCLE";
    dispatch(bookUpdateAction({ ordNum, status }, null));
  }, [ordNum, dispatch]);

  const onRegisterClick = useCallback(() => {
    const status = "RECEIPT";
    dispatch(bookUpdateAction({ ordNum, status }, null));
  }, [ordNum, dispatch]);

  const onClose = useCallback(() => {
    setOpen(open => {
      return false;
    });
  }, []);

  const onClickCancel = useCallback(
    e => {
    e.preventDefault();
      history.push("/");
    },
    [history]
  );

  useEffect(() => {
    if (bookError) {
      dispatch(logout());
      history.push("/");
      return;
    }
  }, [bookError, dispatch, history]);

  useEffect(() => {
    const ordNum = location.pathname.split("/")[2];
    setOrdNum(ordNum);
    dispatch(bookAction(ordNum));
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (isBookUpdated) {
      alert(UPDATE_BOOK_SUCCESS_MSG);
      dispatch(bookUpdateInit());
      history.push("/");
    }
  }, [isBookUpdated, dispatch, history]);

  return (
    <>
      <BookDetail
        book={book}
        isAdmin={isAdmin}
        onUpdateClick={onUpdateClick}
        onCancleClick={onCancleClick}
        onRegisterClick={onRegisterClick}
        isRequest={isRequest}
        isApproval={isApproval}
        onClickCancel={onClickCancel}
      ></BookDetail>
      {open ? <ModalContainer onClose={onClose} ordNum={ordNum} /> : null}
    </>
  );
};

export default withRouter(BookDetailContainer);
