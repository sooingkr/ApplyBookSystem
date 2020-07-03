import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFormValues } from "redux-form";
import { BookList } from "./";
import { logout } from "../../../common/actionCreators/";
import { bookClear } from "../../bookDetail/actionCreators";
import { booksAction, booksClearAction } from "../actionCreators/";

const BookListContainer = ({ values, history }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { books, booksError, isBookRequesting } = useSelector(
    ({ bookListReducer, form }) => ({
      books: bookListReducer.books,
      booksError: bookListReducer.booksError,
      isBookRequesting: bookListReducer.isBookRequesting,
      search: form.searchBarForm
    })
  );

  const onSubmit = e => {
    let { selectCondition = null, selectValue = null } = values;

    if (selectCondition === "reqType") {
      if (selectValue === "개인") {
        selectValue = "01";
      } else {
        selectValue = "02";
      }
    }

    dispatch(
      booksAction({
        selectValue: selectValue,
        selectCondition: selectCondition
      })
    );
  };

  const onTableRowDoubleClick = useCallback(
    ordNum => {
      history.push(`/book/${ordNum}`);
    },
    [history]
  );

  const onRequestClick = useCallback(
    e => {
      history.push("/bookRequest");
    },
    [history]
  );

  useEffect(() => {
    dispatch(booksClearAction());
    dispatch(bookClear());

    if (JSON.stringify(booksError) !== "null") {
      dispatch(logout());
      history.push("/");
      return;
    }

    dispatch(booksAction(null));
  }, [dispatch, history, booksError]);

  // 로딩바
  useEffect(() => {
    if (isBookRequesting) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isBookRequesting]);

  return (
    <BookList
      books={books}
      onTableRowDoubleClick={onTableRowDoubleClick}
      onSubmit={onSubmit}
      onRequestClick={onRequestClick}
      Loading={loading}
    ></BookList>
  );
};

export default connect(state => ({
  values: getFormValues("searchBarForm")(state)
}))(withRouter(BookListContainer));
