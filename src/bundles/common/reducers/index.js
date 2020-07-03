import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from "../../login/reducers/loginReducer";
import joinReducer from "../../join/reducers/joinReducer";
import bookListReducer from "../../book/bookList/reducers/BookListReducer";
import requestBookReducer from "../../book/bookRequest/reducers/requestBookReducer";
import bookReducer from "../../book/bookDetail/reducers/BookDetailReducer";
import bookUpdateReducer from "../../book/bookDetail/reducers/BookUpdateReducer";
import updateUserReducer from "../../member/updateUserInfo/reducers/updateUserReducer";
import { LOGOUT } from "../actionCreators/";

const appReducer = combineReducers({
  form: formReducer,
  loginReducer: loginReducer,
  joinReducer: joinReducer,
  bookListReducer: bookListReducer,
  bookReducer: bookReducer,
  bookUpdateReducer: bookUpdateReducer,
  requestBookReducer: requestBookReducer,
  updateUserReducer: updateUserReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("adminYn");
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
