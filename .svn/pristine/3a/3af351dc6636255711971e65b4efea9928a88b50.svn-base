import { all } from "redux-saga/effects";
import { loginSaga } from "../../login/saga/loginSaga";
import { joinSaga } from "../../join/saga/joinSaga";
import { bookListSaga } from "../../book/bookList/saga/BookListSaga";
import { bookSaga } from "../../book/bookDetail/saga/BookDetailSaga";
import { bookUpdateSaga } from "../../book/bookDetail/saga/BookUpdateSaga";
import { requestBookSaga } from "../../book/bookRequest/saga/requestBookSaga";
import { updateUserSaga } from "../../member/updateUserInfo/saga/updateUserSaga";
import { requestYes24BookInfoSaga } from "../../book/bookRequest/saga/requestYes24Saga";
import { requestKyoboBookInfoSaga } from "../../book/bookRequest/saga/requestKyoboSaga";
import { requestRidiInfoSaga } from "../../book/bookRequest/saga/requestRidiSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    joinSaga(),
    requestBookSaga(),
    updateUserSaga(),
    bookListSaga(),
    bookSaga(),
    bookUpdateSaga(),
    requestYes24BookInfoSaga(),
    requestKyoboBookInfoSaga(),
    requestRidiInfoSaga()
  ]);
}
