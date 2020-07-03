import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import RidiModalPopup from "./RidiModalPopup";
import { change } from "redux-form";
import { logout } from "../../../common/actionCreators/";
import { REQUEST_RIDI_SEARCH_MODAL, REQUEST_INIT } from "../actionCreators";
import { RIDI_PRODUCT_DETAIL_URL } from "../../../common/constants/commonConstant";

const BOOK_REQ_FORM_NAME = "BookRequestForm";

const RidiModalContainer = ({ history, onClose, ordNum, bookName }) => {
  const dispatch = useDispatch();
  const { ridiBookInfo, requestRidiErrorReason } = useSelector(
    state => state.requestBookReducer
  );

  const onSubmit = selectedBook => {
    if (selectedBook == null) {
      return;
    }

    dispatchSelectedBookInfo(dispatch, selectedBook);
    dispatchModal(REQUEST_RIDI_SEARCH_MODAL, false, dispatch);
    dispatch({ type: REQUEST_INIT });
  };

  const onClickShowDetailBookInfo = goodsNo => {
    window.open(
      `${RIDI_PRODUCT_DETAIL_URL}${goodsNo}`,
      "도서 상세",
      "width=1000, height=900, toolbar=no, menubar=no, scrollbars=no, resizable=yes"
    );
  };

  useEffect(() => {
    if (requestRidiErrorReason !== "") {
      dispatch(logout());
      alert("세션만료로 로그인페이지로 이동합니다.");
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestRidiErrorReason]);

  return (
    <RidiModalPopup
      onClose={onClose}
      onSubmit={onSubmit}
      searchBookName={bookName}
      ridiBookInfo={ridiBookInfo !== undefined ? ridiBookInfo : null}
      onClickShowDetailBookInfo={onClickShowDetailBookInfo}
    />
  );
};

export default withRouter(RidiModalContainer);

function dispatchModal(type, isOpen, dispatch) {
  dispatch({
    type: type,
    payload: isOpen
  });
}

function dispatchSelectedBookInfo(dispatch, selectedBookInfo) {
  if (selectedBookInfo) {
    dispatch(change(BOOK_REQ_FORM_NAME, "bookName", selectedBookInfo.bookName));
    dispatch(
      change(
        BOOK_REQ_FORM_NAME,
        "reqUrl",
        `${RIDI_PRODUCT_DETAIL_URL}${selectedBookInfo.reqUrl}`
      )
    );
    dispatch(
      change(
        BOOK_REQ_FORM_NAME,
        "price",
        Number(selectedBookInfo.ridiPrice.replace(",", ""))
      )
    );
  }
}
