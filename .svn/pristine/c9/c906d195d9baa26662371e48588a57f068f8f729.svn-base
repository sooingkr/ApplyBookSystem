import React, { useEffect, useState, useCallback } from "react";
import { BookRequest } from "./";
import { REQUEST_BOOK_INIT } from "../actionCreators";
import { getFormValues, focus } from "redux-form";
import { useDispatch, connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  requestBookAction,
  requestYes24BookInfoAction,
  requestKyoboInfoAction,
  requestRidiInfoAction
} from "../actionCreators";
import ModalContainer from "./ModalContainer";
import EbookModalContainer from "./EbookModalContainer";
import RidiModalContainer from "./RidiModalContainer";
import {
  REQUEST_YES24_SEARCH_MODAL,
  REQUEST_KYOBO_SEARCH_MODAL,
  REQUEST_RIDI_SEARCH_MODAL,
  REQUEST_INIT
} from "../actionCreators";
import { logout } from "../../../common/actionCreators";
import {
  SUCCESS,
  TOKEN_ERROR_CODE,
  REQUEST_BOOK_SUCCESS_MSG,
  REQUEST_BOOK_TITLE_ERROR_MSG,
  DEFAULT_ACTIVE_PAGE,
  DEFAULT_COUNT
} from "../../../common/constants/commonConstant";

const BookRequestContainer = ({ values, history }) => {
  const [error, setError] = useState("");
  const [bookName, setBookName] = useState("");

  const dispatch = useDispatch();
  const {
    isRequested,
    yes24SearchModal,
    requestErrorReason,
    requestYes24ErrorReason,
    kyoboSearchModal,
    ridiSearchModal
  } = useSelector(state => state.requestBookReducer);

  useEffect(() => {
    if (isRequested) {
      alert(REQUEST_BOOK_SUCCESS_MSG);
      dispatchRequestBookInit(dispatch);
      history.push("/");
    }

    if (requestErrorReason !== null && requestErrorReason !== "") {
      if (SUCCESS !== requestErrorReason.retCode) {
        setError(requestErrorReason.retMsg);
        if (TOKEN_ERROR_CODE === requestErrorReason.retCode) {
          dispatch(logout());
          return;
        }
      }
    }

    if (requestYes24ErrorReason !== null && requestYes24ErrorReason !== "") {
      if (SUCCESS !== requestYes24ErrorReason.retCode) {
        alert(requestYes24ErrorReason.retMsg);

        dispatchModal(REQUEST_YES24_SEARCH_MODAL, false, dispatch);

        if (TOKEN_ERROR_CODE === requestYes24ErrorReason.retCode) {
          dispatch(logout());
          return;
        }
      }
    }
  }, [
    isRequested,
    requestErrorReason,
    requestYes24ErrorReason,
    dispatch,
    history
  ]);

  const onSubmit = e => {
    const {
      bookName,
      reqType,
      reqYearMonth,
      reqUrl,
      address,
      price,
      etc,
      bookType
    } = values;

    setBookName(bookName);
    // let date = getDateMonthToStr(reqYearMonth);

    dispatch(
      requestBookAction({
        bookName,
        reqType,
        reqYearMonth,
        reqUrl,
        address,
        price,
        etc,
        bookType
      })
    );
  };

  const onClickForSearchBook = e => {
    e.preventDefault();
    let bookNameVal = values.bookName;
    let bookType = values.bookType;
    let ebookStore = values.ebookStore;

    setBookName(bookNameVal);

    if (bookNameVal === "" || bookNameVal == null) {
      alert(REQUEST_BOOK_TITLE_ERROR_MSG);
      dispatch(focus("BookRequestForm", "bookName"));

      return false;
    }

    if (bookType === "일반도서") {
      dispatch(
        requestYes24BookInfoAction({
          bookName: escape(bookNameVal),
          active: DEFAULT_ACTIVE_PAGE,
          count: DEFAULT_COUNT
        })
      );

      dispatchModal(REQUEST_YES24_SEARCH_MODAL, true, dispatch);
    } else {
      if (ebookStore === "교보문고") {
        dispatch(
          requestKyoboInfoAction({
            bookName: bookNameVal,
            active: DEFAULT_ACTIVE_PAGE + 1
          })
        );

        dispatchEbookModal(REQUEST_KYOBO_SEARCH_MODAL, true, dispatch);
      } else {
        dispatch(
          requestRidiInfoAction({
            bookName: bookNameVal,
            active: DEFAULT_ACTIVE_PAGE + 1
          })
        );

        dispatchEbookModal(REQUEST_RIDI_SEARCH_MODAL, true, dispatch);
      }
    }
  };

  const onClose = useCallback(
    e => {
      dispatchModal(REQUEST_YES24_SEARCH_MODAL, false, dispatch);
      dispatch({ type: REQUEST_INIT });
    },
    [dispatch]
  );

  const onEbookClose = useCallback(
    e => {
      dispatchModal(REQUEST_KYOBO_SEARCH_MODAL, false, dispatch);
      dispatchEbookModal(REQUEST_RIDI_SEARCH_MODAL, false, dispatch);
      dispatch({ type: REQUEST_INIT });
    },
    [dispatch]
  );

  const onClickCancel = useCallback(
    e => {
      history.push("/");
    },
    [history]
  );

  return (
    <>
      <BookRequest
        onSubmit={onSubmit}
        error={error}
        onClickForSearchBook={onClickForSearchBook}
        onClickCancel={onClickCancel}
      ></BookRequest>
      {yes24SearchModal ? (
        <ModalContainer onClose={onClose} bookName={bookName} />
      ) : null}
      {kyoboSearchModal && (
        <EbookModalContainer onClose={onEbookClose} bookName={bookName} />
      )}
      {ridiSearchModal && (
        <RidiModalContainer onClose={onEbookClose} bookName={bookName} />
      )}
    </>
  );
};

export default connect(state => ({
  values: getFormValues("BookRequestForm")(state)
}))(withRouter(BookRequestContainer));

function dispatchRequestBookInit(dispatch) {
  dispatch({
    type: REQUEST_BOOK_INIT
  });
}

function dispatchModal(type, isOpen, dispatch) {
  dispatch({
    type: type,
    payload: isOpen
  });
}

function dispatchEbookModal(type, isOpen, dispatch) {
  dispatch({
    type: type,
    payload: isOpen
  });
}
