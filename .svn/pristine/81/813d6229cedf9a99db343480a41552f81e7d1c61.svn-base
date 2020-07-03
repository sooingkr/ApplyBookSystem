import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ModalPopup from "./ModalPopup";
import { change } from "redux-form";
import { REQUEST_YES24_SEARCH_MODAL } from "../actionCreators";
import {
  YES24_PRODUCT_DETAIL_URL,
  SPECIAL_CHAR_BOOK_NAME_REG_EX
} from "../../../common/constants/commonConstant";

const BOOK_REQ_FORM_NAME = "BookRequestForm";

const ModalContainer = ({ history, onClose, ordNum, bookName }) => {
  const dispatch = useDispatch();
  const { yes24BookInfoList } = useSelector(state => state.requestBookReducer);

  const onSubmit = selectedBookNum => {
    let selectedBookInfo = null;

    if (selectedBookNum != null) {
      if (yes24BookInfoList != null) {
        selectedBookInfo = JSON.parse(yes24BookInfoList.result.data).List[
          selectedBookNum
        ];
      }
    }

    dispatchSelectedBookInfo(dispatch, selectedBookInfo);
    dispatchYes24Modal(REQUEST_YES24_SEARCH_MODAL, false, dispatch);
  };

  const onClickShowDetailBookInfo = goodsNo => {
    window.open(
      `${YES24_PRODUCT_DETAIL_URL}${goodsNo}`,
      "도서 상세",
      "width=1000, height=900, toolbar=no, menubar=no, scrollbars=no, resizable=yes"
    );
  };

  return (
    <ModalPopup
      onClose={onClose}
      onSubmit={onSubmit}
      searchBookName={bookName}
      yes24SearchBookList={
        yes24BookInfoList != null
          ? JSON.parse(yes24BookInfoList.result.data)
          : null
      }
      onClickShowDetailBookInfo={onClickShowDetailBookInfo}
    />
  );
};

export default withRouter(ModalContainer);

function dispatchYes24Modal(type, isOpen, dispatch) {
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
        selectedBookInfo.GOODS_NM.replace(SPECIAL_CHAR_BOOK_NAME_REG_EX, "")
      )
    );
    dispatch(
      change(
        BOOK_REQ_FORM_NAME,
        "reqUrl",
        `${YES24_PRODUCT_DETAIL_URL}${selectedBookInfo.GOODS_NO}`
      )
    );
    dispatch(change(BOOK_REQ_FORM_NAME, "price", selectedBookInfo.SALE_PR));
  }
}
