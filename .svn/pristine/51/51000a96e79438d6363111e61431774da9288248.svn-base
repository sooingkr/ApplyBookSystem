import { handleActions } from "redux-actions";
import {
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
  REQUEST_BOOK_INIT,
  REQUEST_YES24,
  REQUEST_YES24_SUCCESS,
  REQUEST_YES24_FAILURE,
  REQUEST_YES24_SEARCH_MODAL,
  REQUEST_KYOBO,
  REQUEST_KYOBO_SUCCESS,
  REQUEST_KYOBO_FAILURE,
  REQUEST_KYOBO_SEARCH_MODAL,
  REQUEST_RIDI,
  REQUEST_RIDI_SUCCESS,
  REQUEST_RIDI_FAILURE,
  REQUEST_INIT,
  REQUEST_RIDI_SEARCH_MODAL,
  SELECT_INDEX
} from "../actionCreators";

const initialState = {
  isRequesting: false, // 신청 처리중 동안 로딩바 제어플레그
  requestErrorReason: "",
  requestYes24ErrorReason: "",
  isRequested: false,
  isYes24Requesting: false,
  yes24BookInfoList: null,
  yes24SearchModal: false,
  isKyoboRequesting: false,
  requestKyoboErrorReason: "",
  kyoboSearchModal: false,
  kyoboBookInfoList: null,
  isRidiRequesting: false,
  requestRidiErrorReason: "",
  ridiBookInfo: null,
  ridiSearchModal: false
};

const requestBookReducer = handleActions(
  {
    [REQUEST_BOOK]: (state, { payload: bookInfo }) => ({
      ...state,
      isRequesting: true
    }),
    [REQUEST_BOOK_SUCCESS]: (state, { payload: bookInfo }) => ({
      ...state,
      isRequesting: false,
      isRequested: true
    }),
    [REQUEST_BOOK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      isRequesting: false,
      isRequested: false,
      requestErrorReason: error
    }),
    // 초기화
    [REQUEST_BOOK_INIT]: state => ({
      ...state,
      isRequesting: false,
      isRequested: false
    }),
    [REQUEST_YES24]: state => ({
      ...state,
      isYes24Requesting: true
    }),
    [REQUEST_YES24_SUCCESS]: (state, { payload: searchBookList }) => ({
      ...state,
      isYes24Requesting: false,
      yes24BookInfoList: searchBookList
    }),
    [REQUEST_YES24_FAILURE]: (state, { payload: error }) => ({
      ...state,
      isYes24Requesting: false,
      requestYes24ErrorReason: error,
      yes24BookInfoList: null
    }),
    [REQUEST_YES24_SEARCH_MODAL]: (state, { payload: isOpen }) => ({
      ...state,
      yes24SearchModal: isOpen
    }),
    [REQUEST_KYOBO]: state => ({
      ...state,
      isKyoboRequesting: true
    }),
    [REQUEST_KYOBO_SUCCESS]: (state, { payload: searchBookList }) => ({
      ...state,
      isKyoboRequesting: false,
      kyoboBookInfoList: searchBookList
    }),
    [REQUEST_KYOBO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      isKyoboRequesting: false,
      requestKyoboErrorReason: error,
      kyoboBookInfoList: null
    }),
    [REQUEST_KYOBO_SEARCH_MODAL]: (state, { payload: isOpen }) => ({
      ...state,
      kyoboSearchModal: isOpen
    }),
    [REQUEST_RIDI]: state => ({
      ...state,
      isRidiRequesting: true
    }),
    [REQUEST_RIDI_SUCCESS]: (state, { payload: books }) => ({
      ...state,
      isRidiRequesting: false,
      ridiBookInfo: books
    }),
    [REQUEST_RIDI_FAILURE]: (state, { payload: error }) => ({
      ...state,
      isRidiRequesting: false,
      requestRidiErrorReason: error,
      ridiBookInfo: null
    }),
    [REQUEST_INIT]: state => ({
      ...state,
      ridiBookInfo: null,
      kyoboBookInfoList: null
    }),
    [REQUEST_RIDI_SEARCH_MODAL]: (state, { payload: isOpen }) => ({
      ...state,
      ridiSearchModal: isOpen
    }),
    [SELECT_INDEX]: (state, { payload: index }) => ({
      ...state,
      index: index
    })
  },
  initialState
);

export default requestBookReducer;
