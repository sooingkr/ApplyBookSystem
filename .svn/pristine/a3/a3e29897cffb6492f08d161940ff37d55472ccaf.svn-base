import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import EbookModalPopup from "./EbookModalPopup";
import { change } from "redux-form";
import { REQUEST_KYOBO_SEARCH_MODAL, REQUEST_INIT } from "../actionCreators";
import {
  KYOBO_PRODUCT_DETAIL_URL,
  SPECIAL_CHAR_BOOK_NAME_REG_EX
} from "../../../common/constants/commonConstant";

const BOOK_REQ_FORM_NAME = "BookRequestForm";

const EbookModalContainer = ({ history, onClose, ordNum, bookName }) => {
  const dispatch = useDispatch();
  const { kyoboBookInfoList } = useSelector(state => state.requestBookReducer);

  const onSubmit = selectedBookNum => {
    if (selectedBookNum == null) {
      return;
    }

    dispatchSelectedBookInfo(dispatch, selectedBookNum);
    dispatchModal(REQUEST_KYOBO_SEARCH_MODAL, false, dispatch);
    dispatch({ type: REQUEST_INIT });
  };

  const onClickShowDetailBookInfo = goodsNo => {
    window.open(
      `${KYOBO_PRODUCT_DETAIL_URL}${goodsNo}`,
      "도서 상세",
      "width=1000, height=900, toolbar=no, menubar=no, scrollbars=no, resizable=yes"
    );
  };

  return (
    <EbookModalPopup
      onClose={onClose}
      onSubmit={onSubmit}
      searchBookName={bookName}
      kyoboBookInfoList={kyoboBookInfoList != null ? kyoboBookInfoList : null}
      onClickShowDetailBookInfo={onClickShowDetailBookInfo}
    />
  );
};

export default withRouter(EbookModalContainer);

function dispatchModal(type, isOpen, dispatch) {
  dispatch({
    type: type,
    payload: isOpen
  });
}

function dispatchSelectedBookInfo(dispatch, selectedBookInfo) {
  if (selectedBookInfo) {
    dispatch(
      change(
        BOOK_REQ_FORM_NAME,
        "bookName",
        selectedBookInfo[2].replace(SPECIAL_CHAR_BOOK_NAME_REG_EX, "")
      )
    );
    dispatch(
      change(
        BOOK_REQ_FORM_NAME,
        "reqUrl",
        `${KYOBO_PRODUCT_DETAIL_URL}${selectedBookInfo[0]}`.replace(
          SPECIAL_CHAR_BOOK_NAME_REG_EX,
          ""
        )
      )
    );
    dispatch(change(BOOK_REQ_FORM_NAME, "price", selectedBookInfo[7]));
  }
}
